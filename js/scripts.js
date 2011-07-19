
//Ejemplo de uso del paginador
//Utiliza el plugin jPaginate (http://tympanus.net/jPaginate/) para crear el navegador de páginas

$(document).ready(function(){

	var opciones = {
	   'elementos' : 4,
	   'elemento' : '.elemento',
	   'raiz' : 'paginado'
	}

	var elem = $("#seccion").paginador(opciones);

	$("#paginador").paginate({
		count: $("#seccion").paginador(opciones).getPaginas(),
		rotate: false,
		onChange: function(page){$("#seccion").paginador(opciones).cambiaPagina(page-1)}
	});

});

