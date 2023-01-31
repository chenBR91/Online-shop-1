import React, {useContext, useState, useEffect} from 'react';
import './AddCart.css';
import ProductsContext from '../../ProductsContext';
import { Button } from '@mui/material';

function AddCart({children, style, situation, id, selectBtn}) {
  const {allProducts, setProducts, listProductInCart, setListProductInCart, counterItemInCart, setCounterItemInCart} = useContext(ProductsContext)

  const handdleUpdateCounterCart = (situation) => {
    if(situation === 'increment') {
      setCounterItemInCart(counterItemInCart + 1);
    }
    else if(situation === 'decrement' && counterItemInCart > 0) {
      setCounterItemInCart(counterItemInCart - 1);
    }
  }

  const handleIncOrDec = () => {
    if(situation === 'increment') {
      const getIndex = allProducts.findIndex((product) => product._id === id)
      allProducts[getIndex]['amount'] += 1;
      setProducts([...allProducts]);
      handdleUpdateCounterCart(situation)
      const existProduct = listProductInCart.findIndex((product) => product._id === id )
      if(existProduct === -1) {
        setListProductInCart([...listProductInCart, allProducts[getIndex]]);
      }

    } else if(situation === 'decrement') {
      const getIndex = allProducts.findIndex((product) => product._id === id)
      if(allProducts[getIndex]['amount'] > 0) {
        allProducts[getIndex]['amount'] -= 1;
        setProducts([...allProducts]);
        handdleUpdateCounterCart(situation);
      }
      if(allProducts[getIndex]['amount'] === 0){
        const newListInCart = listProductInCart.filter((product) => product._id !== id );
        setListProductInCart(newListInCart);
      }
    }
  }

  return (
    <>
      {selectBtn === 'regularBtn' ? (
        <button onClick={handleIncOrDec} className='btn-add-cart' style={{background:style.bgColor, color:style.color, width:style.width}}>{children}</button>
      ) : selectBtn === 'specialForDrawer' ? (
        <Button onClick={handleIncOrDec} variant="outlined">{children}</Button>
      ) : selectBtn === 'buttonGroup' ?(
        <Button onClick={handleIncOrDec} variant="outlined">{children}</Button>
      ): (
        <p></p>
      )
    }     
    </>
  )
}

export default AddCart