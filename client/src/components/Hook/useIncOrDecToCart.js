import { useState, useEffect } from 'react';

const UseIncOrDecToCart = (situation, allProducts) => {
    const [products, setProducts] = useState(allProducts);

    useEffect(()=>{
        console.log('situation', situation);
        console.log('allproducts', allProducts);
    }, [])
  

  return products;
}


export default UseIncOrDecToCart;