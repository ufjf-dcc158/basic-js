function Pessoa(nome, idade, sexo){
	this.nome = nome||"Desconhecido";
	this.idade = idade||0;
	this.sexo = sexo||"M";
	this.peso = 50;
}

function imprime(){
		console.log(this.nome, ":", this.idade, this.sexo);
}

Pessoa.prototype.imprime = imprime;

var p1 =  Object.create(Pessoa);
var p2 =  Object.create(Pessoa);


console.log(p1);
p1.imprime();
p2.imprime();

console.log(typeof p1);
console.log(typeof p2);
