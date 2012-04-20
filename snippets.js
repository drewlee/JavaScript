/*
add slashes in strings to regular expression meta characters so that they can be escaped,
used with dynamically generated regular expressions
*/
function escapeRegExMeta(str){
	str = str.replace(/[\\^[\].${}*(+)|?<>]/g, function(s){
		return '\\'+s; 
	});

    return str;
}


/*
regular expression to retrieve a value from a serialized string based on a key
example: 'key1=value1; key2=value2; key3=value3'
sample use: cookies
*/
var reg = new RegExp('(^'+key+'|; '+key+')=([^;]+)');


/*
checks if a variable is a true array
*/
function isArray(a){
	return Object.prototype.toString.call(a) === '[object Array]';
}


/*
replace html entites
*/
HTMLSpecialChars = function(str){
	var chars = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		' ': '&nbsp;',
		"'": '&#39;',
		'"': '&quot;',
		'\n': '<br>'
	};
	
	str = str.replace(/[&<> '"\n]/g, function(s){
		if(s in chars){return chars[s];}
		return false;
	});
	
	return str;
};


/*
convert a mutated array to a real array
eg: arguments, node list, etc.
*/
myArray = Array.prototype.slice.call(myArray);


/*
unshift polyfill
todo: test
*/
if(typeof Array.prototype.unshift !== 'function'){
	Array.prototype.unshift = function(element){
		this.splice(0, 0, element);
		return this.length;
	};
}

/*
cross browser dynamic script loading
*/
function getScript(url, func){
	var script = document.createElement('script');
	
	script.type = "text/javascript";
	script.async = "async";
	script.src = url;
	
	if(typeof func == 'function'){
		script.onload = func;
		
		script.onreadystatechange = function(){
			script.onload = null;
			
			if(script.readyState == 'loaded' || script.readyState == 'complete'){
				func();
			}
		};
	}
	
	document.getElementsByTagName('head')[0].appendChild(script);
}

/*
detect iOS retina display
*/
if(window.devicePixelRatio >= 2){
	alert("Hi Res @ Pixel Ratio : " + window.devicePixelRatio + " &amp; Size : " + screen.width * window.devicePixelRatio);
}else{
	alert("Normal @ Pixel Ratio 1 &amp; Size : " + screen.width + "+" + screen.width);
}