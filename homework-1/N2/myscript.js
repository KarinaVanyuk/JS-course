var num1=prompt('Введите первое число');
var op=prompt('Введите операцию');
var num2=prompt('Введите второе число');
var res;
num1=parseFloat(num1);
num2=parseFloat(num2);
if((isFinite(num1))&&(isFinite(num2))){
switch(op){
	case '+':
	res=num1+num2;
	break;
	case '*':
	res=num1*num2;
	break;
	case '-':
	res=num1-num2;
	break;
	case '/':
	res=num1/num2;
	break;
default:
    alert('Неправильная операция')
}
alert(res)
}
else{ alert('Числа введены неправильно')}