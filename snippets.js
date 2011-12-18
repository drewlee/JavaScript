/*
add slashes to regular expression meta characters in strings so that they can be escaped
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