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

var p1 =  new Pessoa("Fulano", 23, "M");
var p2 =  new Pessoa("Beltana", 18, "F");


console.log(p1);
p1.imprime();
p2.imprime();

console.log(typeof p1);
console.log(typeof p2);
