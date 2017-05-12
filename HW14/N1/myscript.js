var canvas = document.getElementById('canvas');
var button=document.querySelector('.button')
var rec=document.querySelector('.rec')
 var ctx = canvas.getContext('2d');  
 var curs=false
 //   rec.addEventListener('click',function(){
 //  	curs=false
 // 	canvas.addEventListener('mousedown',function(e){
 // 		ctx.strokeRect(e.clientX,e.clientY,100,100)
 // 	})
 // })

 canvas.addEventListener('mousedown',function(){
 	curs=true
 })
 canvas.addEventListener('mousemove',function(e){
 	if (curs===true) {
 		ctx.lineTo(e.clientX,e.clientY);
 			ctx.stroke();
 			ctx.beginPath();
 			ctx.fill();
 			ctx.moveTo(e.clientX,e.clientY	);
 	};
 })
 canvas.addEventListener('mouseup',function(){
 	curs=false
 	ctx.beginPath();
 })
 button.addEventListener('click',function(){
 	var dataURL=canvas.toDataURL('image.png')
 	window.open(dataURL)
 })
  rec.addEventListener('click',function(){
  	curs=false
 	canvas.addEventListener('mousedown',function(e){
 		ctx.strokeRect(e.clientX,e.clientY,100,100)
 	})
 })



