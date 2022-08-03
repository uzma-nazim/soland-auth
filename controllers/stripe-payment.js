const stripe = require("stripe")(process.env.SECRET_KEY) 
const uuid = require("uuid").v4

const payment =(req, res)=>{
    const {token , paydetails} = req.body
    console.log(paydetails.price);
    const  idempotencyKey = uuid()    
    return stripe.customers.create({
        email:token.email,
        source:token.id

    }).then((customer)=>{
        stripe.charges.create({
            amount:paydetails.price *100,
            currency:"usd",
            customer:customer.id,
            receipt_email:token.email,
            description:paydetails.name
        },{ idempotencyKey: idempotencyKey})

    })
    .then((succes)=>{
        res.json({result:"success" ,succes})

    })
    .catch(err=>res.send(err))

}

module.exports  =payment