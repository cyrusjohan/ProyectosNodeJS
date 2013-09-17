function enrutar(manejador ,ruta)
{
  console.log("Voy a enrutar algo para esto--->"  + ruta);

		if( typeof manejador[ruta] === 'function' ){
			return manejador[ruta]();
		}
		else 
		{
			console.log("No existe lo que estas buscando..... :(")
			return "Pagina no existe";
		}

	  
}


exports.enrutar = enrutar;
