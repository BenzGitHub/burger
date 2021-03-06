// Node Dependencies
var mysql = require('mysql');
var connection;

if(process.env.JAWSBD_URL){
    connection = mysql.createConnection(process.env.JAWSBD_URL);
}
else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'burgers_db'
    });
}

// Export Connection
module.exports = connection;