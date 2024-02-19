import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const dispatch = useDispatch();
  let {productList, keyword, error} = useSelector((state) => state.product);
  let [loading, setLoading] = useState(false);
  const getProducts = () => {
    setLoading(true);
    dispatch(productAction.getProducts(keyword));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [keyword]);

  if((loading || productList.length === 0) && !keyword) return <h1>Loading</h1>
  return (
    <div>
      <Container>
        {error ? (
          <Alert className="text-center" variant="danger">
            {error}
          </Alert>
        ) : (
          <Row>
            {productList?.map((product) => (
              <Col key={product.id} md={3} sm={12}>
                <ProductCard item={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll;