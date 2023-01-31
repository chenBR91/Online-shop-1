import React, { useContext, useState } from "react";
import AddCart from "../Carts/AddCart";
import { Link } from "react-router-dom";
import "./product.css";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import ButtonGroup from "@mui/material/ButtonGroup";
import ProductsContext from "../../ProductsContext";
import { width } from "@mui/system";

function Product({ imageUrl, title, price, id, amount, index }) {
  const { allProducts } = useContext(ProductsContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`api/products/productDetail/${id}`}>
          <img src={imageUrl} alt={imageUrl} />
        </Link>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
      </div>

      {/* <ButtonGroup
        variant="outlined"
        aria-label="small button group"
        color="inherit"
      >
        <Button><AiOutlinePlus /></Button>
        <p style={{backgroundColor: 'gray'}}>{amount}</p>
        <Button><AiOutlineMinus /></Button>
      </ButtonGroup> */}

      {/* <div className='product-btn'>
          <AddCart situation={"increment"} id={id} style={{bgColor: 'rgb(107, 180, 107)', width: '45%'}} selectBtn={"regularBtn"}>Add to cart</AddCart>
          <label>{amount}</label>
          <AddCart situation={"decrement"} id={id} style={{bgColor: 'rgb(190, 000, 107)', width: '45%'}} selectBtn={"regularBtn"}>Delete</AddCart>
      </div> */}

      <div className="info-btn-price">
        <div className="price">${price}</div>
        <div className="product-btn">
          <ButtonGroup
            variant="outlined"
            aria-label="small button group"
            color="inherit"
          >
            <AddCart situation={"increment"} id={id} style={{bgColor: 'rgb(190, 000, 107)', width: '45%'}} selectBtn={"buttonGroup"} > <AiOutlinePlus /></AddCart>
            <p className="show-amount" style={{  }}>{amount}</p>
            <AddCart situation={"decrement"} id={id} style={{bgColor: 'rgb(190, 000, 107)', width: '45%'}} selectBtn={"buttonGroup"} > <AiOutlineMinus /></AddCart>
          </ButtonGroup>
        </div>
      </div>
      
    </div>
  );
}

export default Product;
