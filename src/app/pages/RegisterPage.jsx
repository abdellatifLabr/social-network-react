import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { register } from '../../lib/providers/user';
import { fetchUser } from '../../store/actions/user';
import ErrorsList from '../components/ErrorsList';

export default function RegisterPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    const data = await register(values);
    setLoading(false);

    if (data.errors) setErrors(data.errors);

    if (data.success) {
      localStorage.setItem('access_token', data.token);
      localStorage.setItem('refresh_token', data.refreshToken);

      dispatch(fetchUser())
        .then(() => {
          history.push('/');
        })
        .catch((err) => {
          setErrors(err);
        });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      fullName: '',
      password1: '',
      password2: '',
    },
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
            placeholder="Email Address"
            isInvalid={errors && errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors && <ErrorsList field="email" errors={errors} />}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Username */}
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            placeholder="Username"
            isInvalid={errors && errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors && <ErrorsList field="username" errors={errors} />}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Fullname */}
        <Form.Group>
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            placeholder="Fullname"
            isInvalid={errors && errors.fullName}
          />
          <Form.Control.Feedback type="invalid">
            {errors && <ErrorsList field="fullName" errors={errors} />}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password1}
            placeholder="Password"
            isInvalid={errors && errors.password1}
          />
          <Form.Control.Feedback type="invalid">
            {errors && <ErrorsList field="password1" errors={errors} />}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Confirm Password */}
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password2}
            placeholder="Confirm Password"
            isInvalid={errors && errors.password2}
          />
          <Form.Control.Feedback type="invalid">
            {errors && <ErrorsList field="password2" errors={errors} />}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Non field errors */}
        {errors && <ErrorsList field="nonFieldErrors" errors={errors} />}

        <Button variant="primary" type="submit" disabled={loading}>
          Register
        </Button>
      </Form>
    </div>
  );
}
