var express=require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path=require('path');
app.use('/img',express.static(path.join(__dirname,'img')));
app.use('/dist',express.static(path.join(__dirname,'dist')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/admin', function(req, res){
    res.sendFile(path.join(__dirname, 'admin.html'));
});
http.listen(3000, function(){
    console.log('listening on *:3000');
});

io.on('connection',function(socket){
	//接收积分
	socket.on('changeMessage',function(socket){
		socket.team1=parseInt(socket.team1)||0;
		socket.team2=parseInt(socket.team2)||0;
		socket.team3=parseInt(socket.team3)||0;
		socket.team4=parseInt(socket.team4)||0;
		socket.team5=parseInt(socket.team5)||0;
		socket.max=parseInt(socket.max)||10000;//默认最高值为10000
		io.emit('scoreMessage',socket);
	})
})
