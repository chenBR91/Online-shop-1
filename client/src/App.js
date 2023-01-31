import React, { useState, useEffect } from "react";
import ProductsContext from "./ProductsContext";
import StoreContext from "./StoreContext";
// import CartProductsContext from "./CartProductsContext";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Loding from "./components/Loding/Loding";
import Main from "./pages/Main";

function App() {
  const [products, setProducts] = useState([]);
  const [counterItemInCart, setCounterItemInCart] = useState(0);
  const [category, setCategory] = useState("all Products");
  const [sortFilterByPrice, setSortFilterByPrice] = useState([]);
  const [listProductInCart, setListProductInCart] = useState([]);
  const [isLoding, setIsLoding] = useState(true);

  let countAttemptLoadProducts = 0;

  useEffect(() => {
    uploadProductsApi();
  }, []);

  const uploadProductsApi = async () => {
    //const url = "https://fakestoreapi.com/products";
    //const urlServer = "http://localhost:8000";
    const urlServer = "http://localhost:8000/api/products/all-products";
    try {
      const res = await fetch(urlServer);
      const answer = await res.json();
      const productsWithAmount = answer
      .map((ans) => ({ ...ans, amount: 0 }));
      setProducts(productsWithAmount);
      console.log('product', products);
      setSortFilterByPrice(productsWithAmount);
      setIsLoding(false);
      countAttemptLoadProducts = 0;
    } catch (err) {
      if (countAttemptLoadProducts < 3) {
        countAttemptLoadProducts++;
        console.log(`****attempt ${countAttemptLoadProducts}****`);
        uploadProductsApi();
      }
      console.log("err", err.message);
    }
  };

  useEffect(() => {
    console.log("listProductInCart", listProductInCart);
  }, [listProductInCart]);

  const storeValues = {
    category,
    setCategory,
    sortFilterByPrice,
    setSortFilterByPrice,
  };

  const productsValue = {
    allProducts: products,
    setProducts,
    listProductInCart,
    setListProductInCart,
    counterItemInCart,
    setCounterItemInCart
  };

  
  return (
    <Router>
      <StoreContext.Provider value={storeValues}>
        <ProductsContext.Provider value={productsValue}>
          <div>{isLoding ? <Loding /> : <Main />}</div>
        </ProductsContext.Provider>
      </StoreContext.Provider>
    </Router>
  );
}

export default App;
