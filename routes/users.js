const errors=require('restify-errors');
const User=require('../models/User');
const bcrypt=require('bcryptjs');
const auth=require('../auth');
const jwt=require('jsonwebtoken');
const config=require('../config');
module.exports = function(server){

    server.post('/register',async(req,res,next) => {
        const {email,password}=req.body;

        const user=new User({
            email,
            password
        });
        //generate salt then hash password
        bcrypt.genSalt(10,async(err,salt) => {
          bcrypt.hash(user.password,salt,async(err,hash)=>
            {
                user.password=hash;
                try{
                    const newUser=await user.save();
                    res.send(201);
                    next();
                }
                catch(err){
                    return next(new errors.InternalError(err.message));
                }
            });  
        });

    });

    //Authenticate USER
    server.post('/auth',async(req,res,next)=>{
        const {email,password}=req.body;
        try{
            //Authenticate USER
            const user=await auth.authenticate(email,password);
            
            const token=jwt.sign(user.toJSON(),config.JWT_SECRET,{
                expiresIn:'15m'
            });
            const {iat,exp}=jwt.decode(token);
            //Respond with token
            res.send({iat,exp,token});
            //console.log(user);
            next();

        }
        catch(err){
            //User Unauthorizwd
            return next(new errors.UnauthorizedError(err));

        }
    })
}