const CartModel = require("../models/cartSchema");


const cart =(req, res)=>{
    
    const {name,Price ,img} = req.body
    CartModel.create( req.body, (err, data ) => {

        if (err) {

            res.send(err);

        } else {

            res.json({data});

            
        }
    });
    

}

module.exports = cart