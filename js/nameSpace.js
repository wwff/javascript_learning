/*js不产生冲突，需要避免全局变量的泛滥，合理使用命名空间以及为代码添加必要的注释（可以提高代码的可维护性）*/
window.onload=function(){
	var Global={};
	Global.nameSpace=function(str){
		var arr=str.split('.');
		var o=Global;
		for(var i=(arr[0]='Global') ? 1 : 0; i<arr.length;i++){
			o[arr[i]]=o[arr[i]] || {};
			o=o[arr[i]];
		}
	}
}

//甲程序员的编码
(function(){
	var a='cat',b="is cute!";
	Global.nameSpace('A.Cat');
	Global.A.Cat.sport=function(){

	}
	Global.A.str=a;
	Global.A.str1=b;
})();

//乙程序员的编码
(function(){
	var a=Global.A.str,b=Global.A.str1;
	var d=a+b;
	alert(d);	
})();