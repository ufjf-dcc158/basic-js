var p1 = {
	nome: "Fulano",
	idade: 23,
	imprime: function(){
		console.log(this.nome," ",this.idade);
	}
};
var p2 = {
	nome: "Beltrano",
	idade: 12,
	imprime: function(){
		console.log(this.nome," ",this.idade);
	}
};

console.log(p1);
console.log(typeof p1);
console.log(p2);
console.log(typeof p2);