var connection = require("./connection")

// Object Relational Mapper (ORM)

function objToSql(ob) {
  var arr=[];
  for (var key in ob){
    var value=ob[key];
    if (Object.hasOwnProperty.call(ob,key)){
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  };
  return arr.toString();
};

var orm={
  selectAll: function (){
    var queryString=`SELECT * FROM ${tableInput};`;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },
  insertOne: function (table, cols, vals, cb){
    var queryString=`INSERT INTO ${table} (${cols.toString()}) VALUES (${vals.toString()})`;
    console.log(queryString);
      connection.query(queryString, function(err){
        if(err){
          throw err;
        }
        cb(result);
      });
  },
  updateOne: function (table, objColVals, condition, cb){
    var queryString=`UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
    console.log(queryString);
     connection.query(queryString, function(err){
       if(err){
         throw err;
       }
       cb(result);
     });
  }
};

module.exports = orm;