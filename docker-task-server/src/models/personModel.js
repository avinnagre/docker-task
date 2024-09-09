const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

async function getAllPeople() {
    const [rows] = await pool.query('SELECT * FROM people');
    return rows;
}

async function addPerson(person) {
    const { name, age, gender } = person;
    const [result] = await pool.query('INSERT INTO people (name, age, gender) VALUES (?, ?, ?)', [name, age, gender]);
    return result;
}

async function updatePerson(id, person) {
    const { name, age, gender } = person;
    const [result] = await pool.query('UPDATE people SET name=?, age=?, gender=? WHERE id=?', [name, age, gender, id]);
    return result;
}

async function deletePerson(id) {
    const [result] = await pool.query('DELETE FROM people WHERE id=?', [id]);
    return result;
}

module.exports = { getAllPeople, addPerson, updatePerson, deletePerson };
