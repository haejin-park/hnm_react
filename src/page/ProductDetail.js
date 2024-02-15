import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { useParams, useSearchParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id }= useParams();
  console.log('id', id);
  let [product, setProduct] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");
  const getProductDetail = async() => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/haejin-park/hnm_react/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    setLoading(false);
    console.log('data', data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  },[]);

  if(loading || product  == null) return <h1>Loading</h1>;
  return (
    <div>
      <Container>
        {error ? (
          <Alert className="text-center" variant="danger">
            {error}
          </Alert>
        ): (
          <Row>
            <Col xs={12} md={6} className="product-detail-img">
              <img src ={product.img} />
            </Col>
            <Col xs={12} md={6}>
              <div className="product-info">{product.title}</div> 
              <div className="product-info">₩{product.price}</div>
              <div className="choice">{product.choice? 'Consicous choice': ''}</div>
              <Dropdown className="drop-down">
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    사이즈 선택
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {product?.size.length > 0 && 
                    product.size.map((item, index) => (
                    <Dropdown.Item href="#/action-1" key="index"> 
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Button className="add-btn" variant="dark">추가</Button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductDetail
