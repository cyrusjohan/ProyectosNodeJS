var servidor = require('http');


function arrancaServidor(req,respuesta)
{
//indica que tipo de respuesta
// tiene que enviar a un navegador 
console.log("Alguien se ha conectado");
respuesta.writeHead(200,{"Content-Type":"text/html"});
respuesta.write("<h1>El servidor funciono al peluche</h1>");
respuesta.end();

}

servidor.createServer(arrancaServidor).listen(8080);
