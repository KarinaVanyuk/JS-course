var menu=document.getElementById('menu');
document.addEventListener('contextmenu', function(el){
		el.preventDefault()
		menu.style.display='block';
		menu.style.top=el.clientY+'px';
		menu.style.left=el.clientX+'px';
})
document.addEventListener('click', function(){
	menu.style.display='none';
})


