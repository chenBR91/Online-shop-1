import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import basicRouter from "./api/routers/basicApi.js"
import productsRouter from "./api/routers/productsRouter.js";
// import { models } from "./models/index.js";


dotenv.config();
const {PORT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/basic', basicRouter)
app.use(express.static('client/build'))
app.use('/', productsRouter)



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
