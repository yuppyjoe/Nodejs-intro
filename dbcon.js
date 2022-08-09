//
const mysql = require('mysql');
//connection
const dbconnect = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'me', 
    // database : 'nodedb'
});

//connect
dbconnect.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql Connected...");
});

module.exports = dbconnect;