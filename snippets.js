/**
 * Add slashes in strings to regular expression meta characters so that they can be escaped.
 * Used with dynamically generated regular expressions created with RegExp syntax.
 */
function escapeRegExMeta(str){
  str = str.replace(/[\\^[\].${}*(+)|?<>]/g, function(s){
    return '\\'+s; 
  });

  return str;
}


/**
 * Regular expression to retrieve a value from a serialized string based on a key.
 * Example: 'key1=value1; key2=value2; key3=value3'
 * Sample use case: cookies
 */
var reg = new RegExp('(^'+key+'|; '+key+')=([^;]+)');


/**
 * Check if a value is a true array
 */
function isArray(a){
  return Object.prototype.toString.call(a) === '[object Array]';
}


/**
 * Replace html entites
 */
var HTMLSpecialChars = function(str){
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


/**
 * Convert a mutant array to a real array.
 * eg: arguments, node list, etc.
 */
myArray = Array.prototype.slice.call(myArray);


/**
 * Unshift polyfill
 */
if (typeof Array.prototype.unshift === 'undefined'){
  Array.prototype.unshift = function(element){
    this.splice(0, 0, element);
    return this.length;
  };
}


/**
 * Simple inheritance model
 */
var Classy = (function(){
  var s = {},
    x = 'extend',
    F = function(){};

  s[x] = function(fn){
    var P = this,
      C = function(){ this.init.apply(this, arguments); },
      o = fn( P.prototype ),
      i;

    F.prototype = P.prototype;
    C.fn = C.prototype = new F;
    C.fn.init = function(){};

    C[x] = this[x];

    for(i in o){
      if(o.hasOwnProperty(i)){
        C.fn[i] = o[i];
      }
    }

    return C;
  };

  return s;
})();


/**
 * Cross browser dynamic script loading
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

/**
 * Detect iOS retina display
 */
if(window.devicePixelRatio >= 2){
	alert("Hi Res @ Pixel Ratio : " + window.devicePixelRatio + " &amp; Size : " + screen.width * window.devicePixelRatio);
}else{
	alert("Normal @ Pixel Ratio 1 &amp; Size : " + screen.width + "+" + screen.width);
}

