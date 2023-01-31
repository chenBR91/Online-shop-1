import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiBasicRouter from "./api/routers/basicApi.js"
import { models } from "./models/index.js";


dotenv.config();
const {PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/basic', apiBasicRouter)
app.use(express.static('client/build'))

app.get("/api/products/all-products", async (req, res) => {
  models.Products.find((err, obj) => {
    if (err) console.log(err._message);
    res.send(obj);
  });
});

app.get("/api/products/productDetail/:id", async (req, res) => {
  const { id } = req.params;
  models.Products.find({ _id: id }, (err, obj) => {
    if (err) console.log(err._message);
    res.send(obj);
  });
});

// run script only once with postman api for database initilization
app.post("/api/products/create-all-products", async (req, res) => {
  const getAllProducts = [...req.body];
  models.Products.insertMany(getAllProducts);
  res.send(getAllProducts);
});

app.post("/api/users/create-user", async (req, res) => {
  const { email, password, reapetPassword } = req.body;
  res.send({
    email: email,
    password: password,
    reapetPassword: reapetPassword,
  });
  console.log({ email, password, reapetPassword });
});


app.get('*', (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html")
})

mongoose.set("strictQuery", true);
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    console.log('err', err);
    app.listen(PORT, () => {
      console.log(`Server lisiting`);
    });
  }
);
