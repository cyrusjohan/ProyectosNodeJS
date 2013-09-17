function inicio()
{
	console.log("has entrado en la pagina inicio");
	return "Inicio";
}

function pagina2()
{
 	console.log("has entrado en la pagina dos");
	return "Pagina 2";
}


function pagina1()
{
  console.log("Yupiiii has entrado en la pagina uno");
	return "pagina 1";
}

function favicon()
{
	console.log("Se ha pedido favicom");
	return "";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;





