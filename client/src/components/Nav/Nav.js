import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CounterItemsCart from '../Carts/CounterItemsCart';
import FilterBy from '../FilterBy/FilterBy';
import SortBy from '../SortBy/SortBy'
import './nav.css';


function Nav() {
  
  return (
    <div className='middle-element'>
      <nav className="products product-filter">
        <div className="product-menu">
          <h1><Link to='/' className='menu-link'>Products</Link></h1>
          <h1><Link to='/about' className='menu-link'>About</Link></h1>
          <h1><Link to='/query?a=5&b=7&c=8&abcdefghi=9578324878&user=youAreTheBestUserEver' className='menu-link'>Query</Link></h1>
          <h1><Link to='/about' className='menu-link'>Register</Link></h1>
        </div>
          

          <div className="sort">
              <CounterItemsCart />
              <FilterBy />
              <SortBy />
          </div>
      </nav>
    </div>
  )
}

export default Nav