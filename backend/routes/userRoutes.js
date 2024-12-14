import express from "express";
import User from "../models/users_model.js"
import { enums } from "../utils/constant/enums.js";
import jwt from "jsonwebtoken";
import verifyToken from "../utils/constant/verifyToken.js"


export const userRoute = express.Router();

userRoute.get('/', async (req, res) => {
  try {
    const getAllUsers = await User.find();
    res
      .status(200)
      .send({ status: 200, message: enums.SUCCESS, data: getAllUsers });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_CONNECTION });
  }
})

userRoute.post('/register', async (req, res) => {
    const response = await User.create(req.body);
    console.log(response)
  

});

userRoute.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

userRoute.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Access granted', userId: req.user });
});