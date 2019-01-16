var db=require('../dbconnection');

var Usuario={

getAllUsers:function(callback){

return db.query("Select * from usuario",callback);

},
getUserById:function(id,callback){

    return db.query("select * from usuario where id=?",[id],callback);
}
};
module.exports=Usuario;
