import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id }= useParams();
  const [product, setProduct] = useState(null);
  console.log('id', id);
  const getProductDetail = async() => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('data', data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
  },[]);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product-img">
            <img src ={product?.img} />
          </Col>
          <Col className="product-item">
            <div className="title">{product?.title}</div> 
            <div className="price">₩{product?.price}</div>
            <div className="choice">{product?.choice === true? 'Consicous choice': ''}</div>
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
      </Container>
    </div>
  )
}

export default ProductDetail
