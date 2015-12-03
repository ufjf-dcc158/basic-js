var circulo = {};

circulo.raio = 12;
circulo.area = function(){
	console.log(3.14*this.raio*this.raio);
}

console.log(circulo);
circulo.area();

var retangulo = {
	"largura": 10,
	"altura": 20,
	area: function(){
		console.log(this.largura*this.altura);
	}
};

console.log(retangulo);
retangulo.area();
