const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./configdb');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/createuser', (req, res) => {
    const {nome, email} = req.body;
    const sqlinsert =  'INSERT INTO users (nome, email) VALUES (?,?)';
    db.query(sqlinsert, [nome, email], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Erro ao criar o usuário');
        } else {
            res.status(201).send('Usuário criado com sucesso');
        }
    });
});

const port = 3005;
app.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});