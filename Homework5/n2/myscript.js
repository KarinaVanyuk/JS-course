
var belarus=new Object();
belarus={
	flag:'1.png',
	name:'Беларусь',
	population:1070000,
	code:'+375'
}
var russia=new Object();
russia={
	flag:'2.png',
	name:'Россия',
	population:146804372,
	code:'+7'
}
var ukraine=new Object();

ukraine={
	flag:'3.png',
	name:'Украина',
	population:42539010,
	code:'+380'
}
var Kazakhstan= new Object()
Kazakhstan={
	flag:'4.png',
	name:'Казахстан',
	population:18050488,
	code:'+7-6'
}
var india=new Object()
india={
	flag:'5.png',
	name:'Индия',
	population:1310069000,
	code:'+91'
}
var china= new Object()
china={
	flag:'6.png',
	name:'Китай',
	population:1373541278,
	code:'+86'
}
var austria= new  Object();
austria={
	flag:'7.png',
	name:'Австрия',
	population:8725931,
	code:'+43'
}
var usa= new Object();
usa={
	flag:'8.png',
	name:'Америка',
	population:324774000,
	code:'+1'
}
var spain= new Object()
spain={
	flag:'9.png',
	name:'Испания',
	population:46423064,
	code:'+34'
}
var italy= new Object()
italy={
	flag:'10.png',
	name:'Италия',
	population:60674003,
	code:'+39'
}
var germany= new Object()
germany={
	flag:'11.png',
	name:'Германия',
	population:82175700,
	code:'+49'
}
var france= new Object()
france={
	flag:'12.png',
	name:'Франция',
	population:66991000,
	code:'+33'
}
var arr= new Array();
arr=[belarus,russia,ukraine,Kazakhstan,india,china,austria,usa,spain,italy,germany,france]
var table=document.createElement('table');
var el=document.getElementById('conteiner')
var thead=document.createElement('tbody');
table.appendChild(thead);
el.appendChild(table);
var tbody=document.createElement('tbody');
table.appendChild(tbody);

for (var i = 0; i < 4; i++) {
	th=document.createElement('th');
	thead.appendChild(th);
	switch(i){
		case 0: th.innerHTML='Название страны';
		break;
		case 1: th.innerHTML='Флаг';
		break;
		case 2: th.innerHTML='Население';
		break;
		case 3: th.innerHTML='Код';
		break;
	}
};
for (var i = 0; i <arr.length; i++) {
	var tr=document.createElement('tr');
	tbody.appendChild(tr);
	for (var j = 0; j < 4 ; j++) {
		var r = document.getElementsByTagName('td');
		td=document.createElement('td');
		tr.appendChild(td);
		switch(j){
			case 0: td.innerHTML=arr[i].name;
			break;
			case 1: td.innerHTML= "<img src=\"img/"+arr[i].flag+"\">";
			break;
			case 2: td.innerHTML=arr[i].population;
			break;
			case 3: td.innerHTML=arr[i].code;
			break;
		}
};
	
	
};
		


