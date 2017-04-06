
var a=prompt('Введите n')
var b=prompt('Введите m')
var table=document.createElement('table');
var el=document.getElementById('conteiner')
el.appendChild(table);
var tbody=document.createElement('tbody');
table.appendChild(tbody)
for (var i = 0; i < a; i++) {
	var tr=document.createElement('tr');
	tbody.appendChild(tr);
	for (var j = 0; j < b; j++) {
		var td=document.createElement('td');
		tr.appendChild(td)
		if (i==0&& j==0) {
			td.innerHTML='';
		}
		else if(i==0){
			td.innerHTML=(i+1)*j;
		}
		else if (j==0) {
			td.innerHTML=(j+1)*1
		}
		else{
			td.innerHTML=i*j;}
		
		if (i==j) {
			td.setAttribute('style','color:blue')
		};

	};
	
};