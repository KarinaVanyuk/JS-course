var arrname = ['Alex', 'Jacob' ,'Michael', 'Joshua','Matthew','Ethan','Andrew','Daniel','William',
'Joseph','Christopher', 'Anthony','Ryan','Nicholas','David','Tyler','James',
'John','Dylan','Nathan'];
var house={
	human:[],
	flat:[],
	addHuman:function(){
		a=prompt('Введите имя нового жильца');
		b=prompt('Введите номер квартиры нового жильца');
		if (b<16) {
			this.human.push({name:a, numFlat:b});
		this.flat[b].lodgers.push({name:a,numFlat:b})}
		else {alert('Неправильный номер квартиры')}
		
},
	listHuman:function(){
		c=prompt('Введите номер квартиры чьих жителей хотите узнать');
		if (c<16) {
			if (this.flat[c].lodgers.length!=0) {
			(this.flat[c].lodgers.forEach(function(e){
				console.log(e.name)
			}))
		}
		else{
			alert('В этой квартире пока никто не живет')
		}}
		else{alert('Неправильный номер квартиры')}
		

	},
	clearFlat:function(){
		c=prompt('Какую квартиру хотите очистить?');
		if (c<16) {if (this.flat[c].lodgers.length!=0) {
			this.flat[c].lodgers.length=0
			console.log('Жильцы выселены')
		}
		else{
			console.log('Квартира пуста')
		}}
		else {alert('Неправильный номер квартиры')}
		
	},
	 Communal:function(){
	 	costs=prompt('Введите суммарные коммунальные расходы')
	 	for (var i = 1; i < 16; i++) {
	 		if (this.flat[i].lodgers.length!=0) {
	 			var abr=parseInt(costs/squere)*(this.flat[i].sq/this.flat[i].lodgers.length)
			for (var j=0;j<this.flat[i].lodgers.length;j++){
				console.log('Стоимость коммунальных расходов для '+this.flat[i].lodgers[j].name+' - '+abr)
			}
	 		};
	 		
	 	};
	}
};
//Создаем массив квартир
for (var i = 1; i <16; i++) {
	house.flat[i]={
		sq:parseInt(50*Math.random()+30),
		floor: parseInt(5*Math.random()+1),
		lodgers:[]
	}
};
//Создаем массив жильцов
for (var i = 0; i < arrname.length; i++) {
	house.human[i]={
		name: arrname[i],
		numFlat: parseInt(14*Math.random()+1)
	}
	house.flat[house.human[i].numFlat].lodgers.push(house.human[i]);
};
//Считаем площадь
var squere=0
for (var i = 1; i < 16; i++) {
	if (house.flat[i].lodgers.length!=0) {
		squere= squere+house.flat[i].sq
	};
};
