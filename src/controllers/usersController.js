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

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(password, user.hashedPassword);

    if (!validPassword) {
      return res.status(400).json({ message: "Credenciales incorrectas" });
    }

    res.status(200).json({ message: "Sesión iniciada con éxito" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { createUser, loginUser };
