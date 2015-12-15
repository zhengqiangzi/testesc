var a=require('./stylesheets/screen.css');
var $=require('expose?$!jquery');
var score=require('./score.js');

var socket=null
$(document).ready(function(){

	socket = io.connect('ws://192.168.0.240:3000');
	var isAdmin=$('.admin');
	var oldText=$('.oldText')
	var text=$('.text')
	if(isAdmin.length>0)
	{
		//接收当前积分
		socket.on('scoreMessage',function(data){
			oldText.eq(0).html(data.team1)
			oldText.eq(1).html(data.team2)
			oldText.eq(2).html(data.team3)
			oldText.eq(3).html(data.team4)
			oldText.eq(4).html(data.team5)
			$('.oldMax').html(data.max);
		})
		//发送积分
		$('.submit').click(function(){
			var obj={
				team1:text.eq(0).find('input').val()||0,
				team2:text.eq(1).find('input').val()||0,
				team3:text.eq(2).find('input').val()||0,
				team4:text.eq(3).find('input').val()||0,
				team5:text.eq(4).find('input').val()||0,
				max:$('input[name="max"]').val()
			}
			socket.emit('changeMessage',obj)
		})
		//清除积分
		$('.cancel').click(function(){
			var obj={
				team1:0,
				team2:0,
				team3:0,
				team4:0,
				team5:0,
				max:0
			}
			socket.emit('changeMessage',obj)
		})

	}else{
		//柱状图页面接收到数据
		var score_field=$('.data-score');
		socket.on('scoreMessage',function(data){

			var bl=260/parseInt(data.max);
			var t1=data.team1*bl||0;
			var t2=data.team2*bl||0;
			var t3=data.team3*bl||0;
			var t4=data.team4*bl||0;
			var t5=data.team5*bl||0;
/*			console.log('bl=%s;b1=%s;b2=%s,b3=%s,b4=%s,b5=%s',bl,t1,t2,t3,t4,t5)
*/			score_field.eq(0).setScore(data.team1);//分数

			score_field.eq(0).parent().find('.data-middle').height(t1+"px");//柱状图

			score_field.eq(1).setScore(data.team2);//分数
			score_field.eq(1).parent().find('.data-middle').height(t2+"px");//柱状图

			score_field.eq(2).setScore(data.team3);//分数
			score_field.eq(2).parent().find('.data-middle').height(t3+"px");//柱状图

			score_field.eq(3).setScore(data.team4);//分数
			score_field.eq(3).parent().find('.data-middle').height(t4+"px");//柱状图

			score_field.eq(4).setScore(data.team5);//分数
			score_field.eq(4).parent().find('.data-middle').height(t5+"px");//柱状图
		})

	}




})