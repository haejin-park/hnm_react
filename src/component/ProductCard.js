import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
      <img className="product-img" src ={item?.img}/>
      <div className="choice">{item?.choice === true? 'Consicous choice': ''}</div>
      <div className="title">{item?.title}</div> 
      <div className="price">₩{item?.price}</div>
      <div className="new-product">{item?.new === true? '신제품' : ''}</div>
    </div>
  )
}

export default ProductCard
