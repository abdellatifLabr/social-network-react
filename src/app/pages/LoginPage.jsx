import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useMutation, gql } from '@apollo/client';
import { useDispatch } from 'react-redux';

import { fetchUser } from '../../store/actions/user.actions';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      token
      refreshToken
    }
  }
`;

export default function Loginpage() {
  const dispatch = useDispatch();
  const [_errors, setErrors] = useState(null);
  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => {
      const { success, errors, token, refreshToken } = data.tokenAuth;

      if (errors) setErrors(errors);

      if (success) {
        localStorage.setItem('access_token', token);
        localStorage.setItem('refresh_token', refreshToken);

        dispatch(fetchUser());
      }
    },
  });

  const onSubmit = (values) => {
    setErrors(null);
    login({ variables: { email: values.email, password: values.password } });
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit,
  });

  return (
    <div className="w-50 mx-auto mt-lg-5">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter email"
            isInvalid={_errors && _errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {_errors && <ErrorsList errors={_errors} fieldName="email" />}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Password"
            isInvalid={_errors && _errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {_errors && <ErrorsList errors={_errors} fieldName="password" />}
          </Form.Control.Feedback>
        </Form.Group>
        {_errors && <ErrorsList errors={_errors} fieldName="nonFieldErrors" />}
        <Button variant="primary" type="submit" disabled={loading}>
          Log In
        </Button>
      </Form>
    </div>
  );
}

function ErrorsList({ errors, fieldName }) {
  if (!errors[fieldName]) return null;

  return (
    <ul className="text-danger">
      {errors[fieldName].map((error) => (
        <li key={error.code}>{error.message}</li>
      ))}
    </ul>
  );
}
