var canvas = document.querySelector('canvas');
canvas.addEventListener('dragenter',function(e){
	this.classList.add('active')
})
canvas.addEventListener('dragleave',function(e){
	this.classList.remove('active')
})
 var sepia = function (image) {
        var pixels = image.data;
        for(var i = 0; i < pixels.length; i+= 4){
            var r = pixels[i];
            var g = pixels[i+1];
            var b = pixels[i+2];
            pixels[i] = (r*0.393)+(g*0.769)+(b*0.189);
            pixels[i+1] = (r*0.349)+(g*0.686)+(b*0.168);
            pixels[i+2] = (r*0.272)+(g*0.534)+(b*0.131);
        }
        return image;
    };
canvas.addEventListener('drop',function(e){
	this.classList.remove('active')
	var dT=e.dataTransfer;
	e.preventDefault();
	var reader=new FileReader();
	reader.readAsDataURL(dT.files[0]);
	reader.onload=function(){
        var img = new Image();
		var a=this.result;
		img.src=a;
        
        img.onload = function() {
            var ctx = canvas.getContext('2d');  
            ctx.drawImage(img, 10, 10);
            var image = ctx.getImageData(0, 0, 400, 600);
            var imageFiltred = sepia(image);
            ctx.putImageData(imageFiltred, 0, 0);
            };
};
     

})
canvas.addEventListener('dragover',function(e){
	e.preventDefault();
})


