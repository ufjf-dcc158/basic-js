var msg = "Hello World!";

function pai(txt){
	var msg = txt;

	function filho(){
		console.log(msg);
	}

	return filho;

}

var funcaoFilho = pai(msg);
msg = "asdasd dasda";
funcaoFilho();	
