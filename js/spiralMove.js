window.onload=function(){
	var oSpiral=document.getElementById('spiral');
	var oUl=oSpiral.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var size=6;
	var len=size*size;
	var eachSize=50;
	var col=0;
	var row=0;
	var min=0;
	var max=size-1;
	var arr=[];
	var bgArr=[];
	oUl.style.width=size*(eachSize+1)+'px';
	oUl.style.height=size*(eachSize+1)+'px';
	for(var i=0;i<len;i++){
		var oLi=document.createElement('li');
		oLi.style.width=eachSize+'px';
		oLi.style.height=eachSize+'px';
		oUl.appendChild(oLi);
	}
	for(var j=0;j<len;j++){
		//aLi[ row * size + col ].innerHTML = j;
		arr.push(aLi[row*size+col]);
		if(row === min && col < max){
			col++;
		}else if(col === max && row < max){
			row++;
		}else if(row ===max && col > min){
			col--;
		}else if(col === min && row > min){
			row--;
		}if(row-1===min && col===min){
			min++;
			max--;
		}
	}
	for(var i=0;i<len;i++){
		if(i%4===0){
			var n=Math.floor(Math.random()*10);
			var bgImg='url(../images/'+n+'.jpg)';
			arr[i].style.backgroundImage=bgImg;
			bgArr.push([i,bgImg]);
		}
	}
	move();
	setInterval(move,1000);
	function move(){
		for(var i=0;i<aLi.length;i++){
			aLi[i].style.backgroundImage='';
			aLi[i].className='';
		}
		for(var i=0;i<bgArr.length;i++){
			bgArr[i][0]++;
			if(arr[bgArr[i][0]]){
				arr[bgArr[i][0]].style.backgroundImage=bgArr[i][1];
				arr[bgArr[i][0]].className='active';
				arr[bgArr[i][0]].style.animationDelay = -Math.random()*1 + 's';
				arr[bgArr[i][0]].style.webkitAnimationDelay = -Math.random()*1 + 's';
			}else{
				bgArr.pop();
				var n=Math.floor(Math.random()*10);
				var bgImg='url(../images/'+n+'.jpg)';
				bgArr.unshift([0,bgImg]);
			}

		}
	}
}