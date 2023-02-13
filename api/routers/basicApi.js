import express from "express"
import productsServer from "../../data/productsServer.js"

const productsRouter = express.Router();


productsRouter.get("/about", async (req, res) => {
    res.send({ message: "Hello world" });
  });
  
  productsRouter.get("/", async (req, res) => {
    res.send({ data: productsServer });
  });
  
  productsRouter.get("/product/:id", async (req, res) => {
    console.log("id", req.params.id);
    try {
      const getProductDetail = productsServer.filter(
        (product) => product.id === Number(req.params.id)
      );
      res.send({ data: getProductDetail });
    } catch (err) {
      console.log("err", err);
    }
  });

export default productsRouter;
