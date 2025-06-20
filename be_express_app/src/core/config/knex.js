// src/core/config//knex.js
// koneksi ke database pakai knexfile
const knex = require('knex');
const config = require('../../../knexfile');

const db = knex(config.development);

module.exports = db;