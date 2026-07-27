import bcrypt from "bcryptjs";
import { findUserByEmail, createUser } from "../models/userModel.js";
import generateToken from "../utlis/generateToken.js"

export const register = (req, res) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    createUser({ name, email, password: hash }, (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "User Registered" });
    });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, async (err, results) => {
    if (results.length === 0)
      return res.status(400).json({ message: "User not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Wrong password" });

    res.json({
      token: generateToken(user.id),
    });
  });
};