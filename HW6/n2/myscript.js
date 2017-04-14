var text = document.getElementById('text');
var Cipher = document.getElementById('Cipher');
var textCipher = document.getElementById('textCipher');
var Decipher = document.getElementById('Decipher');
var str2=''
Cipher.addEventListener("click", function(){
	var str=text.value;
	for (var i = 0; i < str.length; i++) {
		var strcode=3*str.charCodeAt(i);
		if (i<str.length-1) {
			str2+=strcode+'-';
		}
		else{
			str2+=strcode;
		}	
}
textCipher.value=str2;	
})

Decipher.addEventListener("click", function(){
	var str=textCipher.value.split('-');
	for (var i = 0; i < str.length; i++) {
	str2 += String.fromCharCode(str[i]/3);
}
text.value=str2;

})