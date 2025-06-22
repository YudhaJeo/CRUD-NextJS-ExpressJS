// src/models/userModel.js
import db from '../core/config/knex.js';

export const getAllUsers = () => {
  return db('users').select();
};