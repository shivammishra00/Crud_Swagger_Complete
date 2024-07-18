const mysql = require('mysql');

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:"3306",
    database:"crud"
})
connection.connect((err,result)=>{
    if(err){
        console.log("error", err.sqlMessage)
    }
    else{
        console.log("database connect")
    }
})

module.exports = connection;