// src/controllers/userController.js
import { getAllUsers,  createUser as createUserModel } from '../models/userModel.js';

export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });

  try {
    const [id] = await createUserModel('users').insert({ name, email });
    res.status(201).json({ id, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
