const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        required: false,
        type: String,

    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    category:{
        type: String,
        required: true,
    }




},
{
    timestamps: true
})

const Product=mongoose.model('Product',productSchema)
module.exports=Product