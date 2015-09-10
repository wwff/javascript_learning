window.onload=function(){
	var oCrash=document.getElementById('crash');
	var speedX=5;
	var speedY=5;
	startCrash();

	function startCrash(){
		setInterval(function(){
			var X=oCrash.offsetLeft+speedX;
			var Y=oCrash.offsetTop+speedY;
			if(X > document.documentElement.clientWidth - oCrash.offsetWidth){
				X=document.documentElement.clientWidth-oCrash.offsetWidth;
				speedX*=-1;
			}else if(X < 0){
				X=0;
				speedX*=-1;
			}
			if(Y > document.documentElement.clientHeight-oCrash.offsetHeight){
				Y=document.documentElement.clientHeight-oCrash.offsetHeight;
				speedY*=-1;
			}else if(Y < 0){
				Y=0;
				speedY*=-1;
			}
			oCrash.style.left = X + 'px';
			oCrash.style.top = Y + 'px';
		},35);
	}
}