var readline = require('readline');

console.log("Configurando entrada e saída...");
var reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log("Solicitando nome...");
var nome= "";
var sobrenome= "";

reader.question("Qual é o seu nome?\n", function(resposta){
	nome = resposta;
	reader.question("Qual é o seu sobrenome?\n", function(resposta){
		sobrenome = resposta;
		reader.close();
		console.log("Olá "+nome+ " "+ sobrenome);
		console.log("Fim do programa.")
	});
});

