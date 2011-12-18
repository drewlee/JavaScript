/*
add slashes to regular expression meta characters in strings so that they can be escaped
used with dynamically generated regular expressions
*/
function escapeRegExMeta(str){
    var meta = '\\,^,[,.,$,{,*,(,+,),|,?,<,>'.split(',');

    for(var i=0, l=meta.length; i<l; i++){
        str = str.replace(new RegExp('\\'+meta[i], 'g'), '\\'+meta[i]);
    }

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