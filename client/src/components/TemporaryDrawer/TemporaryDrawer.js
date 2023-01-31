import React, { useContext } from "react";
import ".././Product/product.css";

import Drawer from "@mui/material/Drawer";
import DrawerContext from "../../DrawerContext";
import ProductsContext from "../../ProductsContext";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AddCart from "../Carts/AddCart";

import { Button } from "@mui/material";
import { MdOutlinePayment } from "react-icons/md";
// import { AiOutlineDelete } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";


function TemporaryDrawer() {
  const { cartOpen, onClose } = useContext(DrawerContext);
  const { listProductInCart } = useContext(ProductsContext);


  const calculatePricePerProduct = (price, amount) => {
    return price * amount;
  };

  const MediaCard = ({product}) => {
    return (
      <Card>
        <Typography gutterBottom variant="h6" component="div">
          {product.title}
        </Typography>
        <div className="product-image">
          <img src={product.image} alt={product.image} />
        </div>
        <div className="info-price">
          <span>Quantity: {product.amount}</span>
          <span>
            Price: ${calculatePricePerProduct(product.price, product.amount)}
          </span>
        </div>
        <div className="btn-delete">
          <AddCart situation={"decrement"} id={product._id} style={{bgColor: 'rgb(190, 000, 107)', width: '45%'}} selectBtn={"specialForDrawer"}>Delete</AddCart>
        </div>
      </Card>
    );
  };

  const productsInCart = () => {
    return listProductInCart.map((productInCart, index) => (
      <div key={index} style={{ border: "1px solid red" }}>
        <MediaCard product={productInCart} />
      </div>
    ));
  };

  const BtnBuyNow = () => {
    return (
      <div className="buy">
        <Button
          className="btn-buy"
          variant="contained"
          endIcon={<MdOutlinePayment />}
        >
          Buy now
        </Button>
      </div>
    )
  }

  const contentDrawer = () => {
    if(listProductInCart.length > 0) {
      return(
        <div>
           {productsInCart()}
           <BtnBuyNow />
        </div>
      )
    } else {
      return(
        <div className="empty-cart">
          <p>empty cart</p>
        </div>
      )
    }
  }


  return (
    <div>
      <Drawer variant="temporary" open={cartOpen} anchor={"right"}>
        <div style={{width: '300px'}}>
          <Button onClick={onClose} size="medium" endIcon={<IoMdClose />}>Close</Button>
            {contentDrawer()}
        </div>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;