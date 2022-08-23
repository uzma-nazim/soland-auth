const ReviewModel = require("../models/reviewSchema")

const review = (req, res)=>{
    
    ReviewModel.create(req.body , (err, review)=>{
        if(err){
            res.json({err})
        }
        else{
            res.json({review})
        }

    })


}

module.exports = review