const UserModel = require("../models/userSchema");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken")
const loginController = (req, res) => {
  
  const { email, password } = req.body;
  const options ={
    secure: true,
    expire: process.env.EXPIRES_TOKEN  + Date.now()
  }

  if(email ==process.env.ADMIN_EMAIL && password==process.env.ADMIN_PASSWORD){
    
    const token = jwt.sign({email} , process.env.JWT_SECRET_KEY)
    
    return res.cookie('token' , token , options )
    .json({token})
    
  }

  if (!email || !password) {
    return res.json({ message: "Required field's are missing." });
  }

  UserModel.findOne({ email }, async (error, user) => {
    if (error) {
      res.send(error);
    } else if (user) {
      await bcryptjs

        .compare(password, user.password)

        .then((password) => {
          if (password) {
            res.send({ message: "user successfully login", data: user });

            console.log({ message: "user successfully login", data: user });
          } else {
            res.send({ error: "Invalid Credentials" });
          }
        })

        .catch((err) => {
          res.send(err);
        });
    } else {
      res.json({ error: "Invalid Credentials" });

      console.log("Invalid Credentials");
    }
  });
};

module.exports = loginController;
