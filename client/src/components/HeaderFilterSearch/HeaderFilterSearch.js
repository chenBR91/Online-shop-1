import React from "react";
import FilterByProducts from "./FilterByProducts";
import "./HeaderFilterSearch.css";
import SearchProduct from "./SearchProduct";
import SlideByPrice from "./SlideByPrice";

function HeaderFilterSearch() {
  return (
    <div className="middle-element">
      <div className="card products">
        <div><SearchProduct /></div>
        <div><FilterByProducts /></div>
        <div><SlideByPrice /></div>
      </div>
    </div>
  );
}

export default HeaderFilterSearch;
