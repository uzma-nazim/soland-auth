const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    
    name: {
        type : String
    },

    price: 
    { 
        type: String
        // unique: true 
    },

    img: {
        type: String,
        // maxlength: 11,
        // unique: true,
    },
    user_id:{
        type: String,

    }


});

const CartModel = mongoose.model("cart", CartSchema);

module.exports = CartModel;