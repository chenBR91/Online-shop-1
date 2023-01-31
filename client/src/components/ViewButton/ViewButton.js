import React from 'react'
import '../Carts/AddCart.css';
import { Route, Routes, Link } from 'react-router-dom';
import ProductDetail from '../../pages/ProductDetail/ProductDetail';

function ViewButton({children, style, id, imageUrl, category, title}) {
  return (
    <>
      <Link to={`/view/${id}`} state={{from: 'test state', imageUrl:imageUrl, title:title, category}} className='btn-add-cart' style={{background:style.bgColor, width:style.width}}>
        {children}
      </Link>

      
    </>
  )
}

export default ViewButton;