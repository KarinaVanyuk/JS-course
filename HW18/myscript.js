
var text=document.querySelector('.text');
var bold=document.querySelector('.bold');
var italic=document.querySelector('.italic');
var ulined=document.querySelector('.underlined');
var numlist=document.querySelector('.numlist');
var mark=document.querySelector('.marklist');
var fontN=document.querySelector('.FontName');
var fontS=document.querySelector('.FontSize');
var colorT=document.querySelector('.colorT');
var colorB=document.querySelector('.colorB');
var center=document.querySelector('.center');
var full=document.querySelector('.full');
// var left=document.querySelector('.left');
var rigth=document.querySelector('.rigth');
var indent=document.querySelector('.indent');
var outdent=document.querySelector('.outdent');
var link=document.querySelector('.link');
var img=document.querySelector('.img');
var rule=document.querySelector('.rule');
var remove = document.querySelector(".remove")
 text.contentEditable = true;
// document.execCommand("fontName",false,'Arial');
// document.execCommand("fontSize", false, 4);
 window.addEventListener('unload', function(){
  localStorage.setItem('text', text.innerHTML)
 });
 if (localStorage.getItem !="") {
  text.innerHTML=localStorage.getItem('text')
 }
 bold.addEventListener("click", function(){
 		document.execCommand("bold",false, '');
 		 if(document.queryCommandState('bold')===true){
 			bold.classList.add('active')
 		}
 		else{
 			bold.classList.remove('active')
 		} 		
})

 italic.addEventListener("click", function(){
  	 document.execCommand("italic",false, '');
  	 if(document.queryCommandState('italic')===true){
 			italic.classList.add('active')
 		}
 	 else{
 			italic.classList.remove('active')
 		}
  })
 ulined.addEventListener("click", function(){
  	 document.execCommand("underline",false, '');
  	 if(document.queryCommandState('underline')===true){
 			ulined.classList.add('active')
 		}
 	 else{
 			ulined.classList.remove('active')
 		}
  })
 numlist.addEventListener("click", function(){
  	 document.execCommand("insertOrderedList",false, '');
  	 if(document.queryCommandState('insertOrderedList')===true){
 			numlist.classList.add('active')
 		}
 	 else{
 			numlist.classList.remove('active')
 		}
  })
 mark.addEventListener("click", function(){
  	 document.execCommand("insertUnorderedList",false, '');
  	  if(document.queryCommandState('insertUnorderedList')===true){
 			mark.classList.add('active')
 		}
 	 else{
 			mark.classList.remove('active')
 		}
  })
 fontN.addEventListener('change',function(){
 		document.execCommand("fontName",false,fontN.value);
 })
fontS.addEventListener('change',function(){
 		document.execCommand("fontSize", false, Number(fontS.value));
 })
colorT.addEventListener('change',function(){
 		document.execCommand("foreColor", false,colorT.value);

 })
colorB.addEventListener('change',function(){
 		document.execCommand("hiliteColor", false,colorB.value);
 })
 center.addEventListener("click", function(){
 	if (document.queryCommandState('justifycenter')===false) {
 		document.execCommand("justifycenter",false,null);
 		center.classList.add('active')
 	}
 	else{
 		document.execCommand("justifyLeft",false,null);
 		center.classList.remove('active')
 	}
  })
 full.addEventListener("click", function(){
 	if (document.queryCommandState('justifyFull')===false) {
 		document.execCommand("justifyFull",false,'');
 		full.classList.add('active')
 	}
 	else{
 		document.execCommand("justifyLeft",false,null);
 		full.classList.remove('active')
 	}
  })
   rigth.addEventListener("click", function(){
  	  if (document.queryCommandState('justifyRight')===false) {
 		document.execCommand("justifyRight",false,'');
 		rigth.classList.add('active')
 	}
 	 else{
 		document.execCommand("justifyLeft",false,null);
 		rigth.classList.remove('active')
 		}

  })
   indent.addEventListener("click", function(){
		document.execCommand("indent",false, '');
  })
  outdent.addEventListener("click", function(){
  	 document.execCommand("outdent",false,null);
  })
  link.addEventListener("click", function(){
  	 document.execCommand("createLink",false,prompt('Вставьте адрес'));
  })
   img.addEventListener("click", function(){
  	 document.execCommand("insertImage",false,prompt('Вставьте адрес'));
  })
   
 rule.addEventListener("click", function(){
  	document.execCommand('inserthorizontalrule', false, null);
  })
 remove.addEventListener("click", function(){
 	document.execCommand("removeformat",false,null);
 	rigth.classList.remove('active')
 	full.classList.remove('active')
 	center.classList.remove('active')
 	bold.classList.remove('active')
 	italic.classList.remove('active')
 	ulined.classList.remove('active')
 	numlist.classList.remove('active')
 	mark.classList.remove('active')
 })










