import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { signInUser } from '../../store/actions/user.actions';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    dispatch(signInUser(values.email, values.password))
      .then(() => {
        setLoading(false);
        // navigate to feed page
      })
      .catch((err) => {
        setLoading(false);
        setErrors(err);
      });
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
            isInvalid={errors && errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors && <ErrorsList errors={errors} fieldName="email" />}
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
            isInvalid={errors && errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors && <ErrorsList errors={errors} fieldName="password" />}
          </Form.Control.Feedback>
        </Form.Group>
        {errors && <ErrorsList errors={errors} fieldName="nonFieldErrors" />}
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
