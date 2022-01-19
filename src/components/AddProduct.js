import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validate = (values) => {
  const errors = {};
  if (!values.productname) {
    errors.fullname = 'product name is required';
  }

  if (!values.description) {
    errors.description = 'product description  needed';
  } else if (values.description.length > 500) {
    errors.description = 'Must be 30 characters or less';
  }

  if (!values.image) {
    errors.image = 'paste Image URL ...';
  }

  if (!values.price) {
    errors.price = 'price is required';
  }
  return errors;
};

const AddProduct = () => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      productname: '',
      description: '',
      image: '',
      price: '',
    },
    validate,
    onSubmit: async (values) => {
      try {
        console.log(values);
        await axios.post('http://localhost:3003/addproduct', values);
        navigate('/allproducts');
      } catch (error) {
        console.log('error in add products');
      }
      console.log(values);
    },
  });

  return (
    <>
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
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="productname"
              onChange={formik.handleChange}
              value={formik.values.productname}
              placeholder="Enter product name"
            />
            {formik.errors.productname ? (
              <div style={{ color: 'red' }}>{formik.errors.fullname}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.description}
              placeholder="Description ... "
            />
            {formik.errors.description ? (
              <div style={{ color: 'red' }}>{formik.errors.contact}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              onChange={formik.handleChange}
              value={formik.values.image}
              placeholder="Image url ..."
            />
            {formik.errors.image ? (
              <div style={{ color: 'red' }}>{formik.errors.image}</div>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price per/hour</Form.Label>
            <Form.Control
              type="number"
              name="price"
              onChange={formik.handleChange}
              value={formik.values.price}
              placeholder="Enter price ..."
            />
            {formik.errors.price ? (
              <div style={{ color: 'red' }}>{formik.errors.email}</div>
            ) : null}
          </Form.Group>

          <Button variant="primary" type="submit">
            Add product
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AddProduct;
