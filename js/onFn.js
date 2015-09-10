function on(node,eventType,handler){
	node=typeof node=='string'?document.getElementById(node):node;
	if(document.all){
		//IE
		node.attachEvent('on'+eventType,handler);
	}else{
		//火狐浏览器
		node.addEventListener(eventType,handler,false);
	}
}