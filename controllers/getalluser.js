const UserModel = require("../models/userSchema")

const getAllUser = async (req, res)=>{
    const count = await UserModel.countDocuments() 

    UserModel.find({} , (error, users)=>{
        if(error){
            res.json({error})
        }
        else{
            res.json({users , count})
        }

    })

}

module.exports =getAllUser