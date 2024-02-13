import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
  let navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className="card" onClick={showDetail}>
      <img src ={item?.img}/>
      <div className="choice">{item?.choice? 'Consicous choice': ''}</div>
      <div className="product-info">{item?.title}</div> 
      <div className="product-info">₩{item?.price}</div>
      <div className="new-product">{item?.new? '신제품' : ''}</div>
    </div>
  )
}

export default ProductCard
