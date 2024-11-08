const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cimatec',
    database: 'crud_example'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL server');
});

module.exports = db;