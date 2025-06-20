// src/models/userModel.js
const db = require('../core/config/knex')

// Fungsi ambil semua user dari tabel
const getAllUsers = () => {
    return db('users').select();
};

module.exports = { getAllUsers }