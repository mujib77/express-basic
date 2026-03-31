const pool = require('./db');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.get('/contact', (req, res) => {
    res.send('Contact us at hello@example.com');
})

app.get('/user', (req, res) => {
    res.json({name: "Mujib", role: "developer"})
})

app.post('/createuser', async (req, res) => {
  const { name, age } = req.body
  const result = await pool.query(
    'INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *',
    [name, age]
  )
  res.json({ message: "User created successfully", user: result.rows[0] })
})

app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users')
  res.json(result.rows)
})

app.get('/testdb', async (req, res) => {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});