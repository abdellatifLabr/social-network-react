import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { signInUser } from '../../store/actions/user';
import ErrorsList from '../components/ErrorsList';

export default function LoginPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setErrors(null);
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
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
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

          <Button variant="dark" type="submit" disabled={loading}>
            Log In
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
