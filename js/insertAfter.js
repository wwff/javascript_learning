function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild === targetElement){
			parent.appendChild(newElement);
	}else{
		parent.InsertBefore(newElement,targetElement.nextSibling);
	}
}

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload !== 'function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}