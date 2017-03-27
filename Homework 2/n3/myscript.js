n=+prompt('Введите число N');
x=+prompt('Введите число x');
var a= new Array(0);
var sum=0;
if (isFinite(n)&&isFinite(x)) {for (var i=0;i<=n;i++){
	a[i]=prompt('Введите a'+(i))
	sum=sum+a[i]*Math.pow(x,i)
}}
else{
	alert('Данные введены неверно')
}

console.log('Сумма полинома '+sum)