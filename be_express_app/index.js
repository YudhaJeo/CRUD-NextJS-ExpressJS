const express = require('express');

// import module cors supaya backend bisa diakses dari frontend lain (Next.js)
const cors = require('cors');

// import knex untuk koneksi & query database
const knex = require('knex');
const db = knex(require('./knexfile').development);

// inisialisasi app express
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// ROUTE: GET semua data user
app.get('/users', async (req, res) => {
  try {
    const users = await db('users').select();  // ambil semua data dari tabel 'users'
    res.json(users);                           // kirim data ke frontend format JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// === Running Server ===
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
