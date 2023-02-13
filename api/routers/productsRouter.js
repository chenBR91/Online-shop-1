import express from "express"
import {models} from "../../models/index.js"

const productsRouter = express.Router();

productsRouter.get("/api/products/all-products", async (req, res) => {
    models.Products.find((err, obj) => {
      if (err) console.log(err._message);
      res.send(obj);
    });
  });
  
  productsRouter.get("/api/products/productDetail/:id", async (req, res) => {
    const { id } = req.params;
    models.Products.find({ _id: id }, (err, obj) => {
      if (err) console.log(err._message);
      res.send(obj);
    });
  });
  
  // run script only once with postman api for database initilization
  productsRouter.post("/api/products/create-all-products", async (req, res) => {
    const getAllProducts = [...req.body];
    models.Products.insertMany(getAllProducts);
    res.send(getAllProducts);
  });
  
  productsRouter.post("/api/users/create-user", async (req, res) => {
    const { email, password, reapetPassword } = req.body;
    res.send({
      email: email,
      password: password,
      reapetPassword: reapetPassword,
    });
    console.log({ email, password, reapetPassword });
  });


  productsRouter.delete("/api/products/delete/:id", async(req, res) => {
    const {id} = req.params;
    try {
      const allProductsAfterDelete = await models.Products.deleteOne({"_id": id})
      res.status(200).send(allProductsAfterDelete)
    }
    catch(err) {
      console.log(err);
      res.status(500).send({"message": err})
    }
  })

  productsRouter.put("/api/products/update/:id", async (req, res) => {
    try {
      const {id} = req.params;
      const {price, rate, count} = {...req.body};
      console.log(req.body);
      await models.Products.updateOne({_id: id}, { $set: {price, "rating.rate": rate, "rating.count": count}})
      res.status(200).send("updated")
    }
    catch(err){
      console.log(err);
      res.status(500).send({"message": err})
    }
  })

  productsRouter.post("/api/products/add-product", async (req, res) => {
    try {
      const {price, title, category, description} = {...req.body};

      const newProduct = new models.Products({...req.body})
      await newProduct.save();
      res.status(200).send(newProduct);
    }
    catch(err) {
      console.log(err);
      res.status(500).send({"message": err});
    }
  })

  export default productsRouter;