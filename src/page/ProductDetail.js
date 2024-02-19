import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let {product, errorMessage} = useSelector((state) => state.product);
  let [loading, setLoading] = useState(false);
  const getProductDetail = () => {
    setLoading(true);
    dispatch(productAction.getProductDetail(id));
    setLoading(false);
  }
  useEffect(() => {
    getProductDetail();
  },[]);

  if(errorMessage !== "") return <Container><Alert className="text-center" variant="danger">{errorMessage}</Alert></Container>;
  else if(loading || product == null) return <h1>Loading</h1>;
  return (
    <div>
      <Container>
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
                {product.size?.length > 0 && 
                  product.size.map((item, index) => (
                  <Dropdown.Item href="#/action-1" key={index}> 
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
  );
};

export default ProductDetail
