var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var bodyParser = require ('body-parser');
var cors = require('cors');
var config = require('./config/mainconfig');

//setup
var app = express();


//mongoose promises
mongoose.Promise = global.Promise;
//mongo connect
mongoose.connect(config.db,{useMongoClient:true});

//output of connections
//successfull connection
mongoose.connection.on("connected",function () {
    console.log("Now connected to " + config.db_nickname);
});
//failed connection
mongoose.connection.on("error",function (err) {
   console.log(
       "Encountered an error \n" +
       " db: " + config.db_nickname +'\n'+
       " connectionstring : " + config.db+ '\n'+
       " error : " + err);
});


//further setup

//app usages
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//routes
var appRoutes = require('./appRoutes');
appRoutes(app);

app.listen(port,function(){
    console.log(config.application_name+' started on port ' + port);
});