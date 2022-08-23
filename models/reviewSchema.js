const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    
    name: {
        type : String
    },

    email: 
    { 
        type: String
        
    },

    massage: {
        type: String,
        
    },

  

});

const ReviewModel = mongoose.model("Review", reviewSchema);

module.exports = ReviewModel;