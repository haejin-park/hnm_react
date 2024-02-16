import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
const ProductAll = () => {
  const dispatch = useDispatch();
  let productList = useSelector((state) => state.productList);
  const [query, setQuery] = useSearchParams();
  let [error, setError] = useState("");
  const getProducts = () => {
    try {
      let searchQuery = query.get('q') || "";
      console.log("쿼리값은? ", searchQuery);
      dispatch(productAction.getProducts(searchQuery))
      if(productList.length < 1) {
        if(searchQuery !== ""){
          setError(`${searchQuery}와 일치하는 상품이 없습니다.`);
        } else {
          throw new Error("결과가 없습니다.");
        }
      }
    } catch(err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getProducts(); //useEffect는 배열이 비어있을 땐 맨 처음에 UI가 세팅된 후에만 호출되므로 쿼리가 바뀌면 다시 호출해줄 수 있게 query를 배열에 넣어줘야 함
  }, [query]);

  // 카드 가운데, 한줄에 네개씩, 반응형 웹사이트
  return (
    <div>
      <Container>
        {error? (
          <Alert className="text-center" variant="danger">
            {error}
          </Alert>
          ) : (
          <Row>
            {productList.map((product, index) => (
              <Col key={product.id} md={3} sm={12}>
                <ProductCard item={product} />
              </Col> 
            ))}
          </Row>  
          )
        }
      </Container>
    </div>
  )
}

export default ProductAll
