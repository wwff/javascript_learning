window.onload=function(){
	var timer=null;
	var speed=0;
	function move(){
		clearInterval(timer);
		timer=setInterval(function(){
			startMove();
		},time);
	}
}
function startMove(){
	var oDiv=document.getElementById('div');

}