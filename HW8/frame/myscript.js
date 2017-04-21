
var frame={
	append:function(t,w){
		t.appendChild(w)
	},
	prepand:function(t,w){
		t.insertBefore(w,t.firstChild)
	},
	replace:function(t,w){
		t.parentNode.replaceChild(t, w);
	},
	create: function(s){
		return document.createElement(s);
	},
	remove:function(t){
		t.remove();
	},
	event:function(t,event,func){
		if (typeof t.attachEvent == "function") {
			t.attachEvent('on'+event,func)
		}
		else{
			t.addEventListener(event,func)
		}

	},
	unevent:function(t,event,func){
		if(typeof t.attachEvent == "function"){
			t.detachEvent('on' + event, func);
		}
		else{
			t.removeEventListener(event, func);
		}

	},
	dispatch:function(t,e){
		var event = new Event(e); 
		if (t.fireEvent=='function') {
			t.fireEvent('on' + event,event)
		}
		else{
			t.dispatchEvent(event); 
		}
		
		
	},
	  getById: function (id) {
      return (document.getElementById(id));
    },
     getByTag: function (tag) {
      return(document.getElementsByTagName(tag));
    },
    getBySelector: function (select) {
      return(document.querySelector(select));
    },
    getBySelectorAll: function (select) {
      return(document.querySelectorAll(selec));
    },
    getByClass: function (className) {
      return (document.getElementsByClassName(className));
    },
    width: function(el){
		return el.clientWidth;
	},
	height: function(el){
		return el.clientHeight;
	},
	css: function(el, prop, value){
		if(arguments.length == 2){
			var style = window.getComputedStyle(e);
			return style[prop];
		}
		if(arguments.length == 3){
			e.style[prop] = value;
		}
	},
	pageTop:function(el){
		var top=0;
		while(el.offsetParent!= null){
			top+=el.offsetTop;
			el = el.offsetParent;
		}
		return top;
	},
	pageLeft:function(el){
		var left=0;
		while(el.offsetParent!= null){
			top+=el.offsetLeft;
			el = el.offsetParent;
		}
		return top;

	}

}