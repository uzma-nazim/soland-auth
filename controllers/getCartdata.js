const CartModel = require("../models/cartSchema")

const getcartdata = (req, res)=>{
    const {id} = req.params
    
    CartModel.find({user_id:id}, (err , data)=>{
        if(err){

            res.send(err)
        }
        else{
            res.json({data})
        }

    } )


}

module.exports = getcartdata