var util = require('util');
function urlEncode(str){
	if(typeof str === 'string'){
		var encodedResult = '';
		var hexChars = "0123456789ABCDEF";
		var result = []; 
		for(var i = 0; i<str.length; i++){
			var charCode = str.charCodeAt(i)
			result.push((hexChars.charAt(charCode >> 4)));
			result.push((hexChars.charAt(charCode & 15)));
		}
		
		for(var i = 0; i<result.length; i+=2){
			encodedResult += '%' + result[i] + result[i+1];
		}
		return encodedResult;
	}else if(typeof str === 'number'){
		str = str.toString();
		var encodedResult = '';
		var hexChars = "0123456789ABCDEF";
		var result = []; 
		for(var i = 0; i<str.length; i++){
			var charCode = str.charCodeAt(i)
			result.push((hexChars.charAt(charCode >> 4)));
			result.push((hexChars.charAt(charCode & 15))); 
		}
		
		for(var i = 0; i<result.length; i+=2){
			encodedResult += '%' + result[i] + result[i+1];
		}
		return encodedResult;
	}else if(typeof str === 'object' && util.isArray(str)){
		str = str.join(',');
		var encodedResult = '';
		var hexChars = "0123456789ABCDEF";
		var result = []; 
		for(var i = 0; i<str.length; i++){
			if(str[i] == ','){result.push(str[i]); continue;}
			var charCode = str.charCodeAt(i)
			result.push((hexChars.charAt(charCode >> 4)));
			result.push((hexChars.charAt(charCode & 15))); 
		}
		var j = 0;
		encodedResult += j++ + '=';
		for(var i = 0; i<result.length; i++){
			if(result[i] == ','){
				i++;
				encodedResult += j++ + '=';
				var and = '&';
			}else{
				var and = '';
			}
			if(i==0){
				var and = '&';
			}
			if(i+2==result.length){
				var and = '';
			}
			encodedResult += '%' + result[i] + result[++i] + and;
		}
		return encodedResult;
	}else if(typeof str === 'object'){
		var encodedResult = '';
		var hexChars = "0123456789ABCDEF";
		var result = []; 
		for(var key in str){
			var val = str[key];
			for(var i = 0; i<key.length; i++){
				var charCode = key.charCodeAt(i)
				result.push((hexChars.charAt(charCode >> 4)));
				result.push((hexChars.charAt(charCode & 15))); 
			}
			result.push('=');
			for(var i = 0; i<val.length; i++){
				var charCode = val.charCodeAt(i)
				result.push((hexChars.charAt(charCode >> 4)));
				result.push((hexChars.charAt(charCode & 15)));
			}
			result.push('&');
		}
		for(var i = 0; i<result.length-1; i+=2){
			if(result[i]=='&'){
				i++;
				encodedResult += '&';
			}
			if(result[i]=='='){
				i++;
				encodedResult += '=';
			}
			encodedResult += '%' + result[i] + result[i+1];
		}
		return encodedResult;
	}
}
// made by nika and shako
