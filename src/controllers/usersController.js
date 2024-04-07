const { User } = require("../db");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Ya existe un usuario con el mismo email" });
    }

    if (!password) {
      return res.status(400).json({ error: "Debe ingresar una contraseña" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await User.create({ email, hashedPassword });

    res.status(200).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createUser };
