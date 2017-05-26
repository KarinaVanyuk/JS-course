var arr;
 var div=document.getElementById('div');
var xhr = new XMLHttpRequest();
xhr.open("GET", "json.json" , true); 
xhr.onload = function(){
	arr = JSON.parse(xhr.responseText);
	coord=[]
 var coords=new google.maps.LatLng(arr[0].latitude,arr[0].longitude);
var map=new google.maps.Map(div,{
		center:coords,
		zoom:6,
		mapTypeId:google.maps.MapTypeId.ROADMAP

	})
for (var i = 0; i < arr.length; i++) {
	var coords=new google.maps.LatLng(arr[i].latitude,arr[i].longitude);
	coord.push(coords)
	var marker=new google.maps.Marker({
		position:coords,
		title:arr[i].title,
		map:map
	})
};
//соединяем
  var flightPlanCoordinates = coord;
  var flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
var sum=0;
for (var i = 0; i < arr.length-1; i++) {
	 sum=sum+calcDistanse(arr[i].latitude,arr[i].longitude,arr[i+1].latitude,arr[i+1].longitude)
	
	
};
flightPath.setMap(map);
console.log('Длина маршрута-'+sum+" км")
}
xhr.send();
 

calcDistanse=function(lat1,lng1,lat2,lng2){
	//Перевести в радианы
	var pi=+Math.PI/180;
	var lat1=lat1*pi;
	var lng1=lng1*pi;
	var lat2=lat2*pi;
	var lng2=lng2*pi;
	var r = 6372.797;
	 // косинусы и синусы широт и разницы долгот
	var cl1 = Math.cos(lat1);
    var cl2 = Math.cos(lat2);
    var sl1 = Math.sin(lat1);
    var sl2 = Math.sin(lat2);
    var delta = lng2 - lng1;
    var cdelta = Math.cos(delta);
    var sdelta = Math.sin(delta);
     // вычисления длины большого круга
    var y = Math.sqrt(Math.pow(cl2 * sdelta, 2) + Math.pow(cl1 * sl2 - sl1 * cl2 * cdelta, 2));
    var x = sl1 * sl2 + cl1 * cl2 * cdelta;

 ad = Math.atan2(y, x);
    dist = parseInt(ad * r);
 
    return dist;

}






