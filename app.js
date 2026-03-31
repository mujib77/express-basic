const express = require('express');
const app = express();
const port = 3000;
const users = [];

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

app.post('/createuser', (req, res) => {
    const user = req.body;
    users.push(user);
    res.json({message: "User created successfully" , user: user})

})

app.get('/users', (req, res) => {
    res.json(users);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});