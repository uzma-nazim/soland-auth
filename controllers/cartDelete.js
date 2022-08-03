const CartModel = require("../models/cartSchema")

const cartdlelete = (req, res)=>{
    const {id}  = req.params
    
    CartModel.deleteOne({id}, (err, data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.json({data})
        }

    })

}

module.exports =cartdlelete