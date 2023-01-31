import React, {useContext} from 'react'
import './FilterBy.css'

import StoreContext from '../../StoreContext';
import ProductsContext from '../../ProductsContext';

function FilterBy() {

  const { setCategory } = useContext(StoreContext);
  const { allProducts } = useContext(ProductsContext);

  const getCategoreis = allProducts.map(p => p.category).filter((value, index, array) => array.indexOf(value)===index);

  const showCategories = getCategoreis.map((category, index) => ( 
      <option value={category} key={index}>{category}</option>
    ))
  
  
  return (
    <div className="collection-sort">
        <label>Filter by:</label>
        <select onChange={(e) => {setCategory(e.target.value)}}>  
            <option value="all Products">All Products</option>
            {showCategories}
        </select>
    </div>
  )
}

export default FilterBy