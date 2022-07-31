const UserModel = require("../models/userSchema");
const bcryptjs = require("bcryptjs");

const loginController = (req, res) => {

  const { email, password } = req.body;

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

      console.log("Invalid Credentials")
      
    }

  });

};

module.exports = loginController;