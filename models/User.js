var db=require('../dbconnection');

var User={

getAllUsers:function(callback){

return db.query("Select * from user",callback);

},
getUserById:function(id,callback){

    return db.query("select * from user where id=?",[id],callback);
},
addUser:function(User,callback){
   console.log("inside service");
   console.log(User.id);
return db.query("Insert into user values(?,?,?)",[User.id,User.nombre,User.apellido],callback);
//return db.query("insert into user(id,nombre,Status) values(?,?,?)",[User1.Id,User1.nombre,User1.Status],callback);
},
deleteUser:function(id,callback){
    return db.query("delete from user where id=?",[id],callback);
},
updateUser:function(id,User,callback){
    return  db.query("update user set nombre=?,apellido=? where id=?",[User.nombre,User.Status,id],callback);
},

deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from user where id in (?)",[delarr],callback);
}
};
module.exports=User;