const bcrypt = require("bcryptjs"); // Importação Criptografar as senhas
const jwt = require("jsonwebtoken"); // Importação JWT
const { loginValidate } = require("../../../validations");
const User = require("../../../models/User");

const dbConnect = require("../../../service/mongoose");

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const { error } = loginValidate(req.body);
      if (error) {
        return res.status(400).send({ message: error.message });
      }

      const selectedUser = await User.findOne({
        email: req.body.email,
      });

      if (!selectedUser) {
        return res.status(400).send("Email or Password incorrect");
        // return res.status(400).send("Email or Password incorrect");
      }

      const passwordAndUserMatch = bcrypt.compareSync(
        req.body.password,
        selectedUser.password
      );
      if (!passwordAndUserMatch) {
        return res.status(400).send("Email or Password incorrect");
        // return res.status(400).send("Email or Password incorrect");
      }

      const tokenValido = jwt.sign(
        { _id: selectedUser._id, admin: selectedUser.admin },
        process.env.TOKEN_SECRET
      );

      return res.json({
        token: tokenValido,
      });
      break;
  }
};

export default handler;
