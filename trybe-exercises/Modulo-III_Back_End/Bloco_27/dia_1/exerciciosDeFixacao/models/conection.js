const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'anagiorgiani',
    password: '',
    host: 'localhost',
    database: 'model_example',
})

module.exports = connection;