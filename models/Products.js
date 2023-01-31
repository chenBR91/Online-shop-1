import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: { rate: Number, count: Number },
});



export default mongoose.model("products", ProductsSchema);