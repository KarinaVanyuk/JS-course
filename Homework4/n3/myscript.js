 var a = 1;
function sq(a){
 return a*a-a;
 }
 var scroll = setInterval(function(){
 window.scrollBy(0, sq(a));
 	a= a+1;
 if( window.scrollY + window.innerHeight >= 15000){
 	clearInterval(scroll);
 }
 			
 }, 200) 












