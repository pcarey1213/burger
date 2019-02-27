var mysql= require ("mysql");

var connection = mysql.createConnection({
  host:"localhost",
  port: 3306,
  password:"Hamill09",
  database:"burgers_db"
});

connection.connect(function(err){
  if (err){
    console.log("Error connecting:"+ err.stack)
    return;
  }
  console.log("Connected as id:"+ connection.ThreadId);
});

module.exports=connection;

