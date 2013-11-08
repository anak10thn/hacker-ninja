//module
var express = require('express');
var superagent = require('superagent');
var consolidate = require('consolidate');

//app
var port = 8181;
var app = express();

//Configure tempate engine
app.engine('html', consolidate.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));


app.get('/',function(req, res){
  return res.render('index',{data:null});
})

app.get('/send',function(req, res){
  return res.render('send',{data:null});
})

var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function (socket) {
    //socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('data', data);
    });
});
console.log("access miniserver http://hostname:"+port); 
