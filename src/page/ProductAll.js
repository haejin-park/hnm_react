import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || "";
    console.log("쿼리값은? ", searchQuery);
    let url = `http://localhost:5000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts(); //useEffect는 배열이 비어있을 땐 맨 처음에 UI가 세팅된 후에만 호출되므로 쿼리가 바뀌면 다시 호출해줄 수 있게 query를 배열에 넣어줘야 함
  }, [query]);

  // 카드 가운데, 한줄에 네개씩, 반응형 웹사이트
  return (
    <div>
      <Container>
        <Row>
          {productList.map((product, index) => (
            <Col key={index} lg={3}>
              <ProductCard item={product} />
            </Col> 
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
