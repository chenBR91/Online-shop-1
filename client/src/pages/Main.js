import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import TemporaryDrawer from "../components/TemporaryDrawer/TemporaryDrawer";
import About from "./About/About";
import QueryUrl from "./Further/QueryUrl";
import Home from "./Home/Home";
import ProductDetail from "./ProductDetail/ProductDetail";
import DrawerContext from ".././DrawerContext";
import Header from "../components/Header/Header";
import HeaderFilterSearch from "../components/HeaderFilterSearch/HeaderFilterSearch";
import SignUp from "./SignUp/SignUp";
import ProductsTable from "./Admin/ProductsTable";
import ProductsEdit from "./Admin/ProductsEdit";
import InsertProduct from "./Admin/InsertProduct";

function Main() {
  const [cartOpen, setCartOpen] = useState(false);

  const onClose = () => {
    setCartOpen(!cartOpen);
  };

  const drawerValue = {
    cartOpen,
    setCartOpen,
    onClose,
  };

  return (
    <div>
      <DrawerContext.Provider value={drawerValue}>
        <TemporaryDrawer />
        <Header />
        <HeaderFilterSearch />
        {/* <Nav /> */}
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/api/products/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/query" element={<QueryUrl />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/admin/table" element={<ProductsTable />} />

          <Route path="/admin/edit/:productId" element={<ProductsEdit />} />
          <Route path="/admin/add" element={<InsertProduct /> } />
        </Routes>
        

      </DrawerContext.Provider>
    </div>
  );
}

export default Main;
