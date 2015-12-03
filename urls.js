var url = require('url');
var address = "http://somedomain.com/pasta/index.html?p1=v1&p2=v2#bang";

console.log("host:", url.parse(address).host);
console.log("pathname:", url.parse(address).pathname);
console.log("query:", url.parse(address, true).query);
console.log("hash:", url.parse(address).hash);