var xhr = new XMLHttpRequest();
var routes  = {
    "#info":{
        path:"hello.html",
        handler: function(){}
    },
    "#page":{
        path:"myPage.html",
        handler: function(){}
    },
    "#comment":{
        path:"comment.html",
        handler: function(){
            var text = document.querySelector(".text");
            var btn = document.querySelector(".button");
            var container = document.querySelector(".container")
            btn.addEventListener("click", function(){
                container.innerText = text.value;
            })
        }
    },
    "#comment":{
        path:"comment.html",
        handler: function(){
            var text = document.querySelector(".text");
            var btn = document.querySelector(".button");
            var container = document.querySelector(".container")
            btn.addEventListener("click", function(){
                container.innerText = text.value;
            })
        }
    },
    "#photo":{
        path:"photo.html",
        handler: function(){
            var btn = document.querySelector(".button");
            btn.addEventListener("click", function(){
                var img = document.createElement("img");
                var container = document.querySelector(".container");
                container.appendChild(img);
                img.setAttribute("src", "123.jpg")
            })
        }   
    },


}
var route = function(){
    var hash = location.hash;
    var path = null;
    var handler = null;
    for(var h in routes)
    {
        if(h == hash)
        {
            path = routes[h].path;
            handler = routes[h].handler;
        }
    }
    if(path!=null)
        openPage(path, handler);
}
var openPage = function (path, handler){
    xhr.open("GET", path , true); 
    xhr.onload = function()
    {
        document.querySelector('.container').innerHTML = xhr.responseText;
        handler();
    }
    xhr.send();
}
window.onhashchange = route;
route();