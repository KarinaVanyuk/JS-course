
var xhr = new XMLHttpRequest();
xhr.open("GET", "json.json" , true); 
var arr;
xhr.onload = function(){
	arr = JSON.parse(xhr.responseText);
for (var i = 0; i < arr.length; i++) { 
	if (arr[0]) {
		video.setAttribute('src',arr[0].path);
	
	}
	var li=document.createElement('li');
	videolist.appendChild(li);	
	li.addEventListener('click',openVideo);
	var str = "<img src='" + arr[i].poster + "'>";
	str+=arr[i].name;
	str+= 'Рейтинг- '+arr[i].ratings;
	li.innerHTML=str;
	li.setAttribute('id',arr[i].id); };

	}

xhr.send();
//проигрыватель
var sum=0;
var video=document.getElementById('video');
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');
var faster = document.querySelector('.faster');
var slower = document.querySelector('.slower');
var volume = document.querySelector('.volume');
var range = document.querySelector('.range');
faster.addEventListener('click',function(){
	video.playbackRate*=2;
})
slower.addEventListener('click',function(){
	video.playbackRate/=2;
})
play.addEventListener('click',function(){ 
	if(play.classList.contains('play')){
		video.play();
		play.classList.add('pause');
		play.classList.remove('play');

	}else{
		video.pause();
		play.classList.add('play');
		play.classList.remove('pause');
	}
});
stop.addEventListener('click',function(){
	video.pause();
	video.currentTime=0;
	if(play.classList.contains('pause')){
		play.classList.remove('pause');
		play.classList.add('play');
	}
})
volume.addEventListener('click',function(){
	if(this.classList.contains('volume')){
		video.muted = true;
		this.classList.remove('volume');
		this.classList.add('active');
	}
	else{
		video.muted = false;
		this.classList.remove('active');
		this.classList.add('volume');
	}
});
function sizePic() {
   video.volume=range.value/100;
}
var a =video.duration;
var time = document.querySelector('.time');
video.addEventListener('loadedmetadata',function(){
	var time = video.duration;
	var str;
	var minutes = parseInt(time/60);
	if(parseInt(minutes/10) == 0){
		str = '0' + minutes;
	}
	else{
		str = minutes;
	}
	var seconds = Math.ceil(time - minutes*60)
	if(parseInt(seconds/10) == 0){
		str += ":0" + seconds;
	}
	else{
		str += ":" + seconds;
	}
	document.querySelector('.time').innerText = str;

});
video.addEventListener('play', function(){
	interval = setInterval(function(){
		var time = video.currentTime;
		var str;
		var minutes = parseInt(time/60);
		if(parseInt(minutes/10) == 0){
			str = '0' + minutes;
		}
		else{
			str = minutes;
		}
		var seconds = Math.ceil(time - minutes*60)
		if(parseInt(seconds/10) == 0){
			str += ":0" + seconds;
		}
		else{
			str += ":" + seconds;
		}
		document.querySelector('.currentTime').innerText = str;
})})

setInterval(videoSlider,100);
function videoSlider(){
	var load = document.querySelector('.load');
	var c = video.currentTime/video.duration*100;
		load.style.width=c*2+'px';}


//открытие видео из листа
var list=document.querySelector('.list');
var videolist=document.getElementById('videolist');


function openVideo(id){
		play.classList.add('play');
		play.classList.remove('pause');
		var video = document.querySelector('video');
		if(this!=window){
			var id = this.id;
	}
 for(var i = 0; i < arr.length; i++){
 		if(arr[i].id == id){
 			video.setAttribute('src', arr[i].path);
 			video.setAttribute('id', id+'v');
 			var commentlist=document.getElementById('commentlist');
			var com=arr[i].comments;
			var afv=commentlist.children.length
			while (commentlist.children.length) {
  			commentlist.removeChild(commentlist.firstChild);
}
			for (var k = 0; k < com.length; k++) {
				var li=document.createElement('li');
				 commentlist.appendChild(li);
				 sum+=com[k].marks;
				 
				 li.innerHTML= "Отзыв:"+com[k].commtext+" " +"Оценка:"+com[k].marks;

			}
			 var ratings=sum/com.length


 		}
}

}


function newVideoPlay(){
	if(parseInt(video.id)+1 <= arr.length){
		openVideo(parseInt(video.id)+1);
				videoPlay();
			}
	}
function videoPlay(){
	if(video.paused){
		video.play();
		play.classList.remove('play');
		play.classList.add('pause');
	}
	else{
		video.pause();
		play.classList.remove('pause');
		play.classList.add('play');
	}
}
video.addEventListener('ended', newVideoPlay);
//комментарии
