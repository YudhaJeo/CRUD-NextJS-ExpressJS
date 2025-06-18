const express = require('express');
const cors = require('cors');
const knex = require('knex');
const app = express();
const port = 5000;

// koneksi ke database MySQL
const db = knex(require('./knexfile').development);

// middleware
app.use(cors());
app.use(express.json()); // penting untuk parsing req.body dari JSON

// GET semua user
app.get('/users', async (req, res) => {
    try {
      const users = await db('users').select();
      console.log('Data dari DB:', users);
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });  

// start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
