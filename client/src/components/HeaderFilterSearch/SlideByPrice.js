import React, { useEffect, useContext, useState } from "react";

import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductsContext from "../../ProductsContext";
import StoreContext from "../../StoreContext";

function valuetext(value) {
  return `${value}°C`;
}

function SlideByPrice() {
  const [value, setValue] = useState([1, 1000]);
  const { setProducts } = useContext(ProductsContext);
  const { sortFilterByPrice } = useContext(StoreContext);


  const handleChange = (event, newValue) => {
    const productsByPriceFilter = sortFilterByPrice.filter((product) => product.price >= newValue[0] && product.price <= newValue[1]);
    console.log("productsByPriceFilter", productsByPriceFilter);
    console.log("sortFilterByPrice", sortFilterByPrice);
    setProducts(productsByPriceFilter);
    setValue(newValue);
  };

  const productMostExpensive = Math.max(...sortFilterByPrice.map(product => product.price))
  

  return (
    <Box sx={{ width: 200 }}>
      <Typography gutterBottom>Filter By Price:</Typography>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={1}
        max={productMostExpensive}
      />
    </Box>
  );
}

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: "#3a8589",
  height: 3,
  padding: "13px 0",
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
    },
    "& .airbnb-bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  "& .MuiSlider-track": {
    height: 3,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
}));

export default SlideByPrice;
