const bcrypt = require("bcryptjs"); // Importação Criptografar as senhas
const { registerValidate } = require("../../../validations");
const User = require("../../../models/User");
const dbConnect = require("../../../service/mongoose");

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      // Validação JOI | Length:

      const { error } = registerValidate(req.body);
      if (error) {
        return res.status(400).send(error.message);
      }

      // Código para não conseguir registrar um email já utilizado:

      const selectedUser = await User.findOne({
        email: req.body.email,
      });

      if (selectedUser) {
        return res.status(400).send("Email already exists");
      }

      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
      });

      try {
        const savedUser = await user.save();
        res.send(savedUser);
      } catch (error) {
        res.status(400).send(error);
      }
      break;
  }
};

export default handler;
