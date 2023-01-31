import React, { useContext } from 'react'
import Product from '../Product/Product'
import ProductsContext from '../../ProductsContext'
import StoreContext from '../../StoreContext';
// import CartProductsContext from '../../CartProductsContext';
import './products.css'

function Products() {
  const { allProducts } = useContext(ProductsContext);
  const { category } = useContext(StoreContext);
  
  const filterArray = category === 'all Products' ? allProducts : allProducts.filter((filterProduct)=>filterProduct.category === category)
  
  return (
    <div className="middle-element">
        <section className="products">
        {filterArray.map((product, index)=>
            <Product 
             index={index}
             key={index}
             imageUrl={product.image} 
             title={product.title} 
             price={product.price}
             category={product.category}
             id={product._id}
             amount={product.amount}
            />
        )}

        </section>
    </div>
  )
}

export default Products
