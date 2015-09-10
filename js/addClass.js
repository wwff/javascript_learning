function addClass(element,cN){
	if(!element.className){
		element.className=cN;
	}else{
		var newClassName=element.className;
		newClassName+=" ";
		newClassName+=cN;
		element.className=newClassName;
	}
}