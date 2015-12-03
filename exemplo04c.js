var a = 3;

var quadrado = function (x){
	return x*x;
}

function dobro(y){
	return 2*y;
}

function imprimeResultado(funcao, valor){
	console.log(funcao(valor));
}

imprimeResultado(quadrado, 3);
imprimeResultado(dobro, 3);


