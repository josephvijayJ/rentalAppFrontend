import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';

const validate = (values) => {
  const errors = {};
  if (!values.fullname) {
    errors.fullname = 'Email is required';
  } else if (values.fullname.length > 15) {
    errors.fullname = 'Must be 15 characters or less';
  }

  if (!values.contact) {
    errors.contact = 'Contact number is required';
  } else if (values.contact.length > 10) {
    errors.contact = 'Must be 10 characters or less';
  }

  if (!values.email) {
    errors.email = 'email is mandatory';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'password is Must !!!';
  } else if (values.password.length < 6) {
    errors.password = 'Length must be greater than 6';
  }

  return errors;
};

const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const formik = useFormik({
    initialValues: {
      fullname: '',
      contact: '',
      age: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        let data = await axios.post('http://localhost:3003/signup', values);
        setErrorMessage(data.data.message);
      } catch (error) {
        console.log('error in signup post');
      }
    },
  });

  return (
    <>
      <p style={{ textAlign: 'center', color: 'red', paddingTop: '30px' }}>
        {errorMessage}
      </p>
      <Card
        style={{
          width: '25rem',
          margin: 'auto',
          marginTop: '125px',
          padding: '30px',
          border: '3px solid black',
        }}
      >
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullname"
              onChange={formik.handleChange}
              value={formik.values.fullname}
              placeholder="Enter your name"
            />
            {formik.errors.fullname ? (
              <div style={{ color: 'red' }}>{formik.errors.fullname}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contact"
              onChange={formik.handleChange}
              value={formik.values.contact}
              placeholder="Contact Num"
            />
            {formik.errors.contact ? (
              <div style={{ color: 'red' }}>{formik.errors.contact}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
              placeholder="Age"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Enter email"
            />
            {formik.errors.email ? (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />
            {formik.errors.password ? (
              <div style={{ color: 'red' }}>{formik.errors.password}</div>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default SignUpForm;
