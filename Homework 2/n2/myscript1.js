
var n=+(prompt('Ввести число N'));
var arr=new Array(0);
var s=+(prompt('Ввести число S'));
var p=+(prompt('Ввести число P'));
var average=0,k=0, j;
if (isFinite(n)&&isFinite(s)&&isFinite(p)) {
	for (var i = 0; i < n; i++) {
		arr.push(parseInt(s-(s/100)*p+(s*p/50)*Math.random()))
		average=(arr[i]/n+average);
		for (j=0;j<n;j++){ 
	if (arr[i]<arr[j]) {
		k=arr[j];
		arr[j]=arr[i]
		arr[i]=k
	};}

	};
}
else{
	alert('Неправильно введены данные')
}
console.log('Массив по возрастанию- '+arr);
console.log('Среднее арифметическое- '+average);


