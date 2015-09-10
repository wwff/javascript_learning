window.onload=function(){
	var oElastic=document.getElementById('elastic');
	var oBtn=document.getElementById('btn');
	var timer=null;
	var speedX=15;
	var speedY=50;
	oBtn.onclick=function(){

		elasticCrash();

	}
	function elasticCrash(){
		clearInterval(timer);
		timer=setInterval(function(){
			speedY += 5;

			var Y=oElastic.offsetTop + speedY;
			var X=oElastic.offsetLeft + speedX;
			if(Y >document.documentElement.clientHeight - oElastic.offsetHeight){

				Y=document.documentElement.clientHeight - oElastic.offsetHeight;

				speedY*=-1;

				speedY*=0.75;

				speedX*=0.75;
			}

			oElastic.style.top = Y+'px';
			oElastic.style.left = X+'px';
		},30);
	}
}