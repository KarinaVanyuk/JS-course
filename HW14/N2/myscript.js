var button = document.getElementById('button');
var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var image = document.getElementById('img');
var ctx1 = canvas1.getContext('2d');
ctx1.drawImage(image, 0, 0);

button.addEventListener('click', function () {
    var ctx2 = canvas2.getContext('2d');
       var sepia = function (imgData) {
           var pixels = imageData.data;
           for(var i = 0; i < pixels.length; i+= 4){
               var r = pixels[i];
               var g = pixels[i+1];
               var b = pixels[i+2];
               pixels[i] = (r*0.393)+(g*0.769)+(b*0.189);
               pixels[i+1] = (r*0.349)+(g*0.686)+(b*0.168);
               pixels[i+2] = (r*0.272)+(g*0.534)+(b*0.131);
           }
           return imgData;
       };

       var imageData = ctx1.getImageData(0, 0, 400, 400);
       var imageDataFiltred = sepia(imageData);
       ctx2.putImageData(imageDataFiltred, 0, 0);
});