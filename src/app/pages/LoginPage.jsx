import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

export default function Loginpage() {
  const [errors, setErrors] = useState(null);

  const onLoginFormSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log(values);
    setErrors({
      email: [{ message: 'this is an email error' }],
      password: [{ message: 'this is an password error' }],
    });
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: onLoginFormSubmit,
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
            {errors && errors.email[0].message}
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
            {errors && errors.password[0].message}
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
          Log In
        </Button>
      </Form>
    </div>
  );
}
