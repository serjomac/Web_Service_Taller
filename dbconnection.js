var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'admin12345',
database:'mis_datos'


});
module.exports=connection;