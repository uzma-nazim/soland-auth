const stripe = require("stripe")(process.env.SECRET_KEY) 
const uuid = require("uuid").v4

const payment =(req, res)=>{
    const {tokenVal , payment} = req.body
    
    const  idempotencyKey = uuid()    
    return stripe.customers.create({
        email:tokenVal.email,
        source:tokenVal.id

    }).then((customer)=>{
        stripe.charges.create({
            amount:payment.price *100,
            currency:"usd",
            customer:customer.id,
            receipt_email:tokenVal.email,
            description:payment.name
        },{ idempotencyKey: idempotencyKey})

    })
    .then((succes)=>{
        res.json({result:"success" ,succes})

    })
    .catch(err=>res.send(err))

}

module.exports  =payment