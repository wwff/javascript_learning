function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload !=='function'){
		oldonload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}