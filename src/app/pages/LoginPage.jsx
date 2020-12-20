import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { signInUser } from '../../store/actions/user';

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
    dispatch(signInUser(values.email, values.password))
      .then(() => {
        setLoading(false);
        history.push('/');
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
        {/* Email */}
        <Form.Group>
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
            {errors && <ErrorsList field="email" errors={errors} />}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group>
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
            {errors && <ErrorsList field="password" errors={errors} />}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Non field errors */}
        {errors && <ErrorsList field="nonFieldErrors" errors={errors} />}

        <Button variant="primary" type="submit" disabled={loading}>
          Log In
        </Button>
      </Form>
    </div>
  );
}

function ErrorsList({ errors, field }) {
  if (!errors[field]) return null;

  return (
    <ul className="text-danger">
      {errors[field].map((error) => (
        <li key={error.code}>{error.message}</li>
      ))}
    </ul>
  );
}
