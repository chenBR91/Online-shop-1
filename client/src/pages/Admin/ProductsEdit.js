import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//import InputLabel from "@mui/material/InputLabel";
import "./ProductsEdit.css";
import { inputAdornmentClasses } from "@mui/material";
import axios from "axios";

function ProductsEdit() {
  const params = useParams();
  const navigate = useNavigate();
  const [singleProduct, setSingleProduct] = useState({});
  const [inputPrice, setInputPrice] = useState("");
  const [inputRate, setInputRate] = useState("");
  const [inputCount, setInputCount] = useState("");
  const paramsId = params.productId;

  useEffect(() => {
    getProductId();
  }, []);

  const getProductId = async () => {
    const url = `http://localhost:8000/api/products/productDetail/${paramsId}`;
    try {
      const res = await fetch(url);
      const product = await res.json();
      setSingleProduct(product[0]);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handdleSubmit = async (evt) => {
    evt.preventDefault();
    const urlUpdate = `http://localhost:8000/api/products/update/${paramsId}`;
    const dataUpdate = {"price": inputPrice, "rate": inputRate, "count": inputCount}
    try {
        const res = await axios.put(urlUpdate, dataUpdate);
        navigate('/admin/table');
    }
    catch(err) {
        console.log(err);
    }
  }

  const handdleChangeInput = (e) => {
    const inputType = e.target.id;
    const valueInput = e.target.value;
    if(inputType === 'Price') {
        setInputPrice(valueInput)
    }
    else if(inputType === 'rate') {
        setInputRate(valueInput)
    }
    else if(inputType === 'count') {
        setInputCount(valueInput)
    }
  }

  return (
    <div className="middle-element">
      <div className="products">
        <div className="main-card">
          <div className="image-card">
            <img
              className="img"
              src={singleProduct.image}
              alt={singleProduct.image}
            />
          </div>
          <div className="input-card">
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="Price"
                label="Price"
                variant="outlined"
                onChange={handdleChangeInput}
              />
              <TextField id="count" label="count" variant="outlined" onChange={handdleChangeInput}/>
              <TextField
                id="rate"
                label="rate"
                variant="outlined"
                onChange={handdleChangeInput}
              />
              <button className="btn-update" onClick={handdleSubmit}>Update</button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsEdit;
