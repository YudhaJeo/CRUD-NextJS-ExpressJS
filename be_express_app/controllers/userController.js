const db = require('../config/db');

// ambil semua data user
const getAllUsers = async (req, res) => {
  try {
    const users = await db('users').select();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllUsers };