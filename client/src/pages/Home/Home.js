import React from 'react'
import Products from '../../components/Products/Products';
import useQueryUrl from '../../components/Hook/useQueryUrl';

function Home() {
  useQueryUrl();
  
  return (
    <div>
        <Products />
    </div>
  )
}

export default Home;