
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
		
		
	}

}