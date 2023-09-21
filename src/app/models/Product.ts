import { Schema } from "mongoose";
import mongoose from "mongoose";



const ProductSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    images: {
        type: Object,
        required: true
    }
})

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;