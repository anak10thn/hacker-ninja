//module
var express = require('express'),
    superagent = require('superagent'),
    consolidate = require('consolidate'),
    engine = require('ejs-locals');

//app
var port = 7070;
var app = module.exports = express();
//routes

require('./routes/routes.js')(app,port,superagent);

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
});

app.listen(port);
console.log("access miniserver http://hostname:"+port); 