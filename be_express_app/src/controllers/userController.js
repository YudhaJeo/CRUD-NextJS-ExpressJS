// src/controllers/userController.js
const userModel = require('../models/userModel');

// controller buat get semua user
const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err){
    res.status(500).json({error: err.message})
  }
};

module.exports = { getUsers }