import React, {useContext} from 'react'
import ProductsContext from '../../ProductsContext';
import './SortBy.css'

function SortBy() {
  const {allProducts, setProducts} = useContext(ProductsContext)

  const handdleChangeSort = (e) => {
    console.log('value', e.target.value);
    const sortOrder = e.target.value;
    const productsBySort = [...allProducts];
    if(sortOrder === 'low-to-high') {
      productsBySort.sort((a, b) => a.price - b.price);
    }
    else if(sortOrder === 'high-to-low') {
      productsBySort.sort((a, b) => b.price - a.price);
    }
    setProducts(productsBySort);
  }


  return (
    <div className="collection-sort">
        <label>Sort by:</label>
        <select onChange={handdleChangeSort}>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="low-to-high">Price, low to high</option>
            <option value="high-to-low">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
        </select>
    </div>
  )
}

export default SortBy