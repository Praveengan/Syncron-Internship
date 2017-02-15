function ini(){
	var res;
	var opd1 = document.getElementById("op1").value;
	var opd2 = document.getElementById("op2").value;
	opd1 = parseInt(opd1);
	opd2 = parseInt(opd2);
	return;
	}
function add(){
	ini();
	res = opd1 + opd2;
	document.getElementById("res").innerHTML = res ;
	}
function sub(){ 
	ini(); 
	res = opd1 - opd2;
	document.getElementById("res").innerHTML = res ;
	}
function mul(){
	ini();
	res = opd1 * opd2;
	document.getElementById("res").innerHTML = res ;
	} 
function div(){
	ini();
	res = opd1 / opd2; 
	document.getElementById("res").innerHTML = res; 
	} 
function mod(){
	ini();
	res = opd1 % opd2;
	document.getElementById("res").innerHTML = res;
	}
