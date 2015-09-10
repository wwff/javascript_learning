function moveElement(targetId,final_x,final_y,time){
	if(!document.getElementById) return false;
	if(!document.getElementById(targetId)) return false;
	var iTarget=document.getElmentById('targetId');
	if(iTarget.movement){
		clearTimeout(iTarget.movement);
	}
	if(!iTarget.style.left){
		iTarget.style.left='0px';
	}
	if(!iTarget.style.top){
		iTarget.style.top='0px';
	}
	var x=parseInt(iTarget.style.left);
	var y=parseInt(iTarget.style.top);
	var speed=0;
	if(x === final_x && y === final_y){
		return true;
	}
	if(x < final_x){
		speed=Math.ceil((final_x - x)/10);
		x+=speed;
	}
	if(x > final_x){
		speed=Math.ceil((x - final_x)/10);
		x-=speed;
	}
	if(y < final_y){
		speed=Math.ceil((final_y - y)/10);
		y+=speed;
	}
	if(y > final_y){
		speed=Math.ceil((y - final_y)/10);
		y-=speed;
	}
	iTarget.style.left=x+'px';
	iTarget.style.top=y+'px';
	iTarget.movement=setTimeout(function(){
		moveElement(targetId,final_x,final_y,time);
	},time);
}


/*function imgShow(){
	if(!document.getElementById) return false;
	if(!document.getElementById(targetId)) return false;
	if(!document.getElmentById('linklist')) return false;
	var imgShow=document.createElement('div');
	imgShow.setAttribute('id','imgShow');
	var pre=document.createElement('img');
	pre.setAttribute('src','../images/pre.jpg');
	imgShow.appendChild(pre);
	var lists=document.getElmentById('linklist');
	insertAfter(imgShow,lists);
}*/
