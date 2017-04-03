
var s='+375 - (29) - 938 -91 -22';
var r=/(\+)(375)\s?\-?\s?\(?\s?(25|29|33|44)\s?\)?\s?\-?\s?([0-9]{3})\s?\-?\s?([0-9]{2})\s?\-?\s?([0-9]{2})\s?/;
b=s.match(r);
if (b[0].length===s.length) {
	console.log('Номер введен правильно')
}
else {
	alert('номер введен неправильно')
}
var str=''
for (var i = 1; i < b.length; i++) {
	var str=str + b[i]
};
console.log(str)













