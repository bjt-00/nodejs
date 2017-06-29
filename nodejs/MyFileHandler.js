/**
 * @Author: Abdul Kareem
 * @Email : abdulkareem.bitguiders@gmail.com
 */

exports.handleFile = function(action){
	if(action=='r'){
		return read();
	}else if(action=='w'){
		return write();
	}
}

function read(){
	return "read file method called";
}
function write(){
	return "write file method called";
}