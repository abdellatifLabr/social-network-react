import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { gql, useMutation } from '@apollo/client';

import ErrorsList from '../components/ErrorsList';

const CREATE_POST_MUTATION = gql`
  mutation CreatePost($title: String!, $body: String!, $image: Upload!) {
    createPost(input: { title: $title, body: $body, image: $image }) {
      success
      errors
      post {
        id
      }
    }
  }
`;

export default function CreatePostPage() {
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: (data) => {
      setLoading(false);
      const { success, post } = data.createPost;
      if (!success) setErrors(data.createPost.errors);
      if (success) history.push(`/post/${post.id}`);
    },
    onError: () => {
      setLoading(false);
    },
  });

  const onSubmit = async (values) => {
    setErrors(null);
    setLoading(true);
    createPost({ variables: { ...values, body: values.body.join('\n\n') } });
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      body: [''],
      image: '',
    },
    onSubmit,
  });

  const addBodySection = () => {
    formik.setFieldValue('body', [...formik.values.body, 'New section']);
  };

  return (
    <Row>
      <Col md={12}>
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="font-weight-bold text-uppercase mb-4">
              Create New Post
            </h4>
          </div>
        </div>
      </Col>
      <Col md={12}>
        <Form onSubmit={formik.handleSubmit}>
          {/* Title */}
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              placeholder="Title"
              isInvalid={errors && errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors && <ErrorsList field="title" errors={errors} />}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Body */}
          <Form.Group>
            <Form.Label>Body</Form.Label>
            {formik.values.body.map((value, index) => (
              <Form.Control
                as="textarea"
                rows="10"
                name={`body[${index}]`}
                value={formik.values.body[index]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Body"
                isInvalid={errors && errors.body}
                className="mb-2"
              />
            ))}
            <Button variant="dark" onClick={addBodySection}>
              + Add Section
            </Button>
            <Form.Control.Feedback type="invalid">
              {errors && <ErrorsList field="body" errors={errors} />}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Image */}
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.File
              type="file"
              label="Post Image"
              custom
              name="image"
              onChange={(e) =>
                formik.setFieldValue(
                  'image',
                  e.currentTarget.files && e.currentTarget.files[0]
                )
              }
              onBlur={formik.handleBlur}
              isInvalid={errors && errors.image}
            />
            <Form.Control.Feedback type="invalid">
              {errors && <ErrorsList field="image" errors={errors} />}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Non field errors */}
          {errors && <ErrorsList field="nonFieldErrors" errors={errors} />}

          <Button variant="primary" type="submit" disabled={loading}>
            Create
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
