import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  // 카드 가운데, 한줄에 네개씩, 반응형 웹사이트
  return (
    <div>
      <Container>
        <Row>
          {productList.map((product, index) => (
            <Col className="product-card-col" key={index} lg={3}>
              <ProductCard item={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
