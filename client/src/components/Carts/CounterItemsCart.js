import React, { useContext } from "react";
import "../FilterBy/FilterBy.css";
import { FiShoppingCart } from "react-icons/fi";
import StoreContext from "../../StoreContext";
import DrawerContext from "../../DrawerContext";

function CounterItemsCart() {
  const { counterCartItems } = useContext(StoreContext);
  const { onClose } = useContext(DrawerContext);

  return (
    <div className="collection-sort">
      <label>Cart:</label>
      <div onClick={onClose}>
        {counterCartItems}
        <FiShoppingCart />
      </div>
    </div>
  );
}

export default CounterItemsCart;
