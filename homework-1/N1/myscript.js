var a=prompt('Введите выражение');
var sum1=0;
var  sum2=0;
for(var i=0;i<a.length; i++){
	if (a[i]==='(') {
		sum1++;
	}
	if (a[i]===')') {
		sum2++;
	}
	
}
if (sum2===sum1) {
	if (sum2+sum1===0){
		alert('Скобок нет');
	}
	else{
		alert('Скобки расставлены правильно');
	}
}
else {
	alert('Скобки расставлены неправильно')
}
		