var arrname = ['Alex', 'Jacob' ,'Michael', 'Joshua','Matthew','Ethan','Andrew','Daniel','William',
'Joseph','Christopher', 'Anthony','Ryan','Nicholas','David','Tyler','James',
'John','Dylan','Nathan'];
var cities=['Minsk','Grodno','Pinsk','Brest','Mogilev','Vitebsk','Gomel','Fanipol','Borisol','Kobrin'];
var goods=[];
goods[0]={
	img:"1.jpeg",
	name:'Ноутбук Dell 9841 Black'
}
goods[1]={
	img:"2.jpeg",
	name:'Проектор CANON LV-X320'
}
goods[2]={
	img:"3.jpeg",
	name:'Цифровая фотокамера Nikon D3400'
}
var a='';
var id=setInterval(function(){
	var div=document.createElement('div');
	var el=document.getElementById('conteiner')
	el.appendChild(div);
	div.setAttribute('class','main')
	var i=parseInt(Math.random()*goods.length)
	a= "<img src=\"img/"+goods[i].img+"\">"+'<span>'+arrname[parseInt(Math.random()*arrname.length)]+' из города '+cities[parseInt(Math.random()*cities.length)]+' купил '+goods[i].name +' в количестве '+ (parseInt(Math.random()*7+1))+' штук'+'<span>';
	div.innerHTML=a;
	var form=document.createElement('form');
	div.appendChild(form);
	var input=document.createElement('input');
	form.appendChild(input);
	input.setAttribute('type','button');
	input.setAttribute('value','x');
	input.addEventListener('click', function(){
	 			this.parentNode.parentNode.remove()
	 	 	})	

	

},Math.random()*1800+2700)


