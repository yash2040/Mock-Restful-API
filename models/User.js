const mongoose=require('mongoose');
//const timestamp=require('mongoose-timestamp');
//mongoose.connection.dropDatabase();
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true   
    }, 
    password:{
        type:String,
        required:true   
    }

});
//CustomerSchema.plugin(timestamp);

//nameofmodule,nameofschema
const User=mongoose.model('User',UserSchema);

module.exports=User;