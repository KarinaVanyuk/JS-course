var tags=0;
var text=0;
var comment=0;
var derevo=function(el){
	console.log(el);
	switch(el.nodeType){
		case 1: tags++;break;
		case 3: text++;break;
		case 8: comment++;break;
	}
	if(el.childNodes.length !=0){
 		for (var i = 0; i < el.childNodes.length; i++) {
 			derevo(el.childNodes[i]);
 		}
 	}
 	
}
derevo(document);
console.log("Тегов " + tags);
console.log("Текстовых узлов " + text);
console.log("Комментариев " + comment);

