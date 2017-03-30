var arr1 = ['Alex', 'Jacob' ,'Michael', 'Joshua','Matthew','Ethan','	Andrew','Daniel','	William',
'Joseph','Christopher', 'Anthony','Ryan','Nicholas','David','Tyler','James',
'John','Dylan','Nathan'];
var arr2=['Minsk','Moscow','Pinsk','Borisov'];
var res=[];
for (var i = 0; i < arr1.length; i++) {
	res[i]={
		name: arr1[i],
		town: arr2[parseInt((arr2.length-1)*Math.random())],
		age: parseInt(100*Math.random())

	}

};
res.sort(function(a,b){
	
	if (a.age> b.age) {
		return -1;
	}
	else{
		return 1;
	}

})
for (var i = 0; i < arr1.length; i++) {
	document.body.innerHTML+= '' + res[i].name +' -'+res[i].town+'-'+res[i].age +"<br>";
};









