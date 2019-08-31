const express = require('express');

const app = express();

const users = [];

app.use(express.json());

app.use((req, res, next) => {
    console.time('Request');
    console.log(`Metodo: ${req.method}; URL: ${req.url}`);
    next();
    console.timeEnd('Request');
})

const checkUser = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({ error: 'Envie o nome do usuário' });
    }

    return next();
}

app.get('/users', (req, res) => {
    return res.json(users);
})


app.get('/users/:index', (req, res) => {

    const { index } = req.params;

    return res.json(users[index]);
})

app.post('/users', checkUser, (req, res) => {

    const { name } = req.body;
    users.push(name);

    return res.send('success');

})

app.put('/users/:index', checkUser, (req, res) => {
    const { name } = req.body;
    const { index } = req.params;
    users[index] = name;
    return res.send('success');
})

app.delete('/users/:index', (req, res) => {
    const { index } = req.params;
    users.splice(index, 1);
    return res.send('success');
})

app.listen(3000);