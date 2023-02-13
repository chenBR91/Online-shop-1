import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    default: "new description",
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
  },
  rating: {
    rate: { type: Number, default: 0 },
    count: { type: Number, default: 0 },
  },
});

export default mongoose.model("products", ProductsSchema);
