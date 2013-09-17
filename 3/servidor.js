
var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar,manejador){	
		//Copie la funcion dentro de otra funcion 		
		function arrancaServidor(req,respuesta)
		{

		var ruta = url.parse(req.url).pathname;

		var  contenido= enrutar(manejador, ruta);

		//Almaceno en un archivo las peticiones de log
		var registro = fs.createWriteStream('Registro.txt',{'flags':'a'})
		registro.write(ruta + '\n');


		
		//indica que tipo de respuesta
		// tiene que enviar a un navegador 
		console.log("Alguien se ha conectado");
		respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.write("<h1>" +contenido +"</h1>");
		respuesta.end();

		}
		servidor.createServer(arrancaServidor).listen(8080);
}

exports.iniciar = iniciar;

