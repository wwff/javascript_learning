window.onload=function(){
	var oMark=document.getElementById('fontMark');
	var oSpan=oMark.getElementsByTagName('span')[0];
	setInterval(function(){
		oMark.style.left=oMark.offsetLeft+1+'px';
		oSpan.style.left=-oMark.offsetLeft+'px';
	},50);
}