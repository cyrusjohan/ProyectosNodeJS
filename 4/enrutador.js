function enrutar(manejador ,ruta,respuesta)
{
  console.log("Voy a enrutar algo para esto--->"  + ruta);

		if( typeof manejador[ruta] === 'function' ){
			 manejador[ruta](respuesta);
		}
		else 
		{
			console.log("No existe lo que estas buscando..... :(")
			return "Pagina no existe";
		}

	  
}


exports.enrutar = enrutar;
