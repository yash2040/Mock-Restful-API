const mongoose=require('mongoose');
const timestamp=require('mongoose-timestamp');
//mongoose.connection.dropDatabase();
const CustomerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true   
    }, 
    email:{
        type:String,
        required:true,
        trim:true   
    },
     balance:{
        type:Number,
        default:0
    }

});
CustomerSchema.plugin(timestamp);

//nameofmodule,nameofschema
const Customer=mongoose.model('Customer',CustomerSchema);

module.exports=Customer;