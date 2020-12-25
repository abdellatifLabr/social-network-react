import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { Form, Button, Row, Col, Dropdown } from 'react-bootstrap';
import { gql, useMutation } from '@apollo/client';

import ErrorsList from '../components/ErrorsList';

const CREATE_POST_MUTATION = gql`
  mutation CreatePost($title: String!, $summary: String!, $image: Upload!) {
    createPost(input: { title: $title, summary: $summary, image: $image }) {
      success
      errors
      post {
        pk
        id
      }
    }
  }
`;

const CREATE_SECTION_MUTATION = gql`
  mutation CreateSection(
    $postId: ID!
    $order: Int!
    $type: String!
    $content: String
    $file: Upload
  ) {
    createSection(
      input: {
        postId: $postId
        order: $order
        type: $type
        content: $content
        file: $file
      }
    ) {
      success
      errors
      section {
        id
      }
    }
  }
`;

export default function CreatePostPage() {
  const history = useHistory();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sections, setSections] = useState(null);
  const [createSection] = useMutation(CREATE_SECTION_MUTATION, {
    onCompleted: (data) => {
      const { success } = data.createSection;
      if (!success) setErrors(data.createSection.errors);
    },
  });
  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: async (data) => {
      const { success, post } = data.createPost;
      if (!success) setErrors(data.createPost.errors);
      if (success) {
        await sections.forEach(async ({ type, content }, index) => {
          if (type === 'text') {
            await createSection({
              variables: { postId: post.pk, type, content, order: index + 1 },
            });
          }

          if (['image', 'video'].includes(type)) {
            await createSection({
              variables: {
                postId: post.pk,
                type,
                file: content,
                order: index + 1,
              },
            });
          }
        });
        setLoading(false);
        history.push(`/post/${post.id}`);
      }
    },
    onError: () => {
      setLoading(false);
    },
  });

  const onSubmit = async (values) => {
    setErrors(null);
    setLoading(true);
    setSections(values.body);
    await createPost({
      variables: { ...values },
    });
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      summary: '',
      body: [{ type: 'text', content: '' }],
      image: '',
    },
    onSubmit,
  });

  const addBodySection = (type) => {
    formik.setFieldValue('body', [
      ...formik.values.body,
      { type, content: '' },
    ]);
  };

  const removeBodySection = (index) => {
    formik.setFieldValue('body', [
      ...formik.values.body.slice(0, index),
      ...formik.values.body.slice(index + 1),
    ]);
  };

  const getSectionComponent = ({ type, content }, index) => {
    if (type === 'text') {
      return (
        <Form.Control
          as="textarea"
          rows="10"
          name={`body[${index}].content`}
          value={content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Body"
          isInvalid={errors && errors.body}
          className="mb-2"
        />
      );
    }

    if (['image', 'video'].includes(type)) {
      return (
        <Form.File
          type="file"
          label="Post File"
          custom
          name={`body[${index}].content`}
          onChange={(e) =>
            formik.setFieldValue(
              `body[${index}].content`,
              e.currentTarget.files && e.currentTarget.files[0]
            )
          }
          onBlur={formik.handleBlur}
          isInvalid={errors && errors.image}
          className="mb-2"
        />
      );
    }
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

          {/* Summary */}
          <Form.Group>
            <Form.Label>Summary</Form.Label>
            <Form.Control
              as="textarea"
              name="summary"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.summary}
              placeholder="Summary"
              isInvalid={errors && errors.summary}
            />
            <Form.Control.Feedback type="invalid">
              {errors && <ErrorsList field="summary" errors={errors} />}
            </Form.Control.Feedback>
          </Form.Group>

          {/* Body */}
          <Form.Group>
            <Form.Label>Body</Form.Label>
            {formik.values.body.map((section, index) => (
              <div className="d-flex" key={index.toString()}>
                <div className="flex-grow-1">
                  {getSectionComponent(section, index)}
                </div>
                <div className="ml-2">
                  <Button
                    variant="danger"
                    onClick={() => removeBodySection(index)}
                  >
                    <span aria-hidden="true">&times;</span>
                  </Button>
                </div>
              </div>
            ))}
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                + Add Section
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => addBodySection('text')}>
                  Text
                </Dropdown.Item>
                <Dropdown.Item onClick={() => addBodySection('image')}>
                  Image
                </Dropdown.Item>
                <Dropdown.Item onClick={() => addBodySection('video')}>
                  Video
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
