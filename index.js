const restify = require('restify');
const mongoose = require('mongoose');

const config = require('./config')
const server = restify.createServer();
const rjwt=require('restify-jwt-community');

server.use(restify.plugins.bodyParser());

//protect routes
server.use(rjwt({ secret:config.JWT_SECRET}).unless({path: ['/auth','/register']}));

server.listen(config.PORT, () => {
    mongoose.set('useFindAndModify',false);
    mongoose.connect('mongodb://localhost/customer_api', { useNewUrlParser: true ,useCreateIndex: true, useUnifiedTopology: true});
});

const db=mongoose.connection;

db.on('error',(err) => console.log(err));

db.once('open', ()=>{
   // console.log("kdfsl");
    require('./routes/customers')(server);
    require('./routes/users')(server);
    console.log('Server started on port'+config.PORT);
});
