var a = 3;

var quadrado = function (x){
	return x*x;
}

function imprimeResultado(funcao, valor){
	console.log(funcao(valor));
}

imprimeResultado(quadrado, 3);


