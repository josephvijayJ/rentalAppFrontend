import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    let data = await axios.get('https://rental-app-backend.herokuapp.com/allproduct');
    console.log(data.data);
    setProducts(data.data);
  }, []);
  console.log(products);
  return (
    <>
      <Container
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'space-around',
        }}
      >
        {products.map((product) => (
          <Row key={product._id}>
            <Col lg="6">
              <Card style={{ width: '18rem', border: '1px solid grey' }}>
                <Card.Img
                  style={{ height: '200px', objectFit: 'contain' }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title>Product : {product.productname}</Card.Title>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontWeight: 500 }}>Description</span>
                    <span>{product.description}</span>
                  </div>

                  <br />
                  <Button variant="primary">Rent/Buy</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Allproducts;
