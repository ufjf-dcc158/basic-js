var fs = require('fs');

console.log("Aplicação iniciando...");
console.log("Lendo arquivo /etc/hosts...");

fs.readFile("/etc/hosts", 'utf8', function (err, data) {
	if(!err){
		console.log(data);
	}
})

console.log("Encerrando programa!");

