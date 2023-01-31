import React, {useContext, useState, useEffect} from 'react';
import ProductsContext from '../../ProductsContext';
import './AddCart.css';

const IncrementOrDecToCart = (situation, id) => {
  debugger
  const {allProducts, setProducts, listProductInCart, setListProductInCart} = useContext(ProductsContext)  
  if(situation === 'increment') {
    const getIndex = allProducts.findIndex((product) => product._id === id)
    allProducts[getIndex]['amount'] += 1;
    setProducts([...allProducts]);
    const existProduct = listProductInCart.findIndex((product) => product._id === id )
    if(existProduct === -1) {
      setListProductInCart([...listProductInCart, allProducts[getIndex]]);
    }
  }
}

export default IncrementOrDecToCart


// import React, {useContext, useState, useEffect} from 'react';
// import './AddCart.css';
// import ProductsContext from '../../ProductsContext';

// function AddCart({children, style, situation, id}) {
//   const {allProducts, setProducts, listProductInCart, setListProductInCart} = useContext(ProductsContext)

//   const handleIncOrDec = () => {
//     if(situation === 'increment') {
//       const getIndex = allProducts.findIndex((product) => product.id === id)
//       allProducts[getIndex]['amount'] += 1;
//       setProducts([...allProducts]);
//       const existProduct = listProductInCart.findIndex((product) => product.id === id )
//       if(existProduct === -1) {
//         setListProductInCart([...listProductInCart, allProducts[getIndex]]);
//       }

//     } else if(situation === 'decrement') {
//       const getIndex = allProducts.findIndex((product) => product.id === id)
//       if(allProducts[getIndex]['amount'] > 0) {
//         allProducts[getIndex]['amount'] -= 1;
//         setProducts([...allProducts]);
//       }
//       if(allProducts[getIndex]['amount'] === 0){
//         const newListInCart = listProductInCart.filter((product) => product.id !== id );
//         setListProductInCart(newListInCart);
//       }
//     }
//   }

//   return (
//     <>
//       <button onClick={handleIncOrDec} className='btn-add-cart' style={{background:style.bgColor, color:style.color, width:style.width}}>{children}</button>
//     </>
//   )
// }

// export default AddCart