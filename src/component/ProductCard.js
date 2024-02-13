import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div onClick={showDetail}>
      <img className="product-img" src ={item?.img}/>
      <div className="choice">{item?.choice === true? 'Consicous choice': ''}</div>
      <div className="title">{item?.title}</div> 
      <div className="price">₩{item?.price}</div>
      <div className="new-product">{item?.new === true? '신제품' : ''}</div>
    </div>
  )
}

export default ProductCard
