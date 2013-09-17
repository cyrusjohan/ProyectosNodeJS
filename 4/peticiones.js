function inicio(respuesta)
{
		console.log("has entrado en la pagina inicio");
	   respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.write("<h1>Pagina de Inicio</h1>");
		respuesta.end();
		return "Inicio";
}

function pagina2(respuesta)
{
 	console.log("has entrado en la pagina dos");
 	respuesta.writeHead(200,{"Content-Type":"text/html"});
   respuesta.write("<h1>Pagina dos</h1>");
   respuesta.end();
	return "Pagina 2";
}


function pagina1(respuesta)
{
  		console.log("Yupiiii has entrado en la pagina uno");
   	respuesta.writeHead(200,{"Content-Type":"text/html"});
  		respuesta.write("<h1>Pagina uno</h1>");
  		respuesta.end();
	return "pagina 1";
}

function favicon(respuesta)
{

		respuesta.writeHead(200,{"Content-Type":"text/html"});
  		respuesta.write("");
  		respuesta.end();
		console.log("Se ha pedido favicom");
		return "";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;





