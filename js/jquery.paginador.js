/*!
 * Plugin paginador para JQuery
 * @version: 1.0
 * @author: 2011 Tomás Hermosilla
 * @licence: GNU/GPLv2.
 */

//#TODO: Seguir las buenas prácticas de creación de plugins

(function($) {

//Entrega el numero total de hijos del elemento padre
	$.fn.contar = function(){
		return $(this).find('*').length;
	};

	$.fn.paginar = function(){
		var args = arguments[0];
		var total = $(this).contar();

		var paginas = total / args.elementos;

		if(parseInt(paginas)!=paginas){paginas = parseInt(paginas)+1}

		$(this).creaPagina({elementos: args.elementos});

		return paginas;
	};

//Divide el selector en la cantidad de páginas requerida
//#OPTIMIZE: Mejorar mecanismo de creación de páginas
	$.fn.creaPagina = function(){
		var args = arguments[0];
		var maximo = parseInt(args.elementos);
		var elems = $(this).find('*').slice(0,maximo);


		$(this).before("<div id='pag'></div>");

		elems.each(function(i,e){
			$("#pag").append($(this).clone());
		});

		$(this).hide()
	};

//Mueve la página
//#IMPROVE: Mejorar para no requerir cantidad de elementos
	$.fn.cambiaPagina = function(){
		var args = arguments[0];
		var pagina = args.pagina -1 ;
		var elementos = args.elementos;
		var elems = $(this).find('*');
		var maximo = elems.length - 1;

		var inicio = pagina*elementos;
		var fin = inicio + elementos;

		var content = elems.slice(inicio,fin);

		$("#pag").html("");

		content.each(function(i,e){
			$("#pag").append($(this).clone());
		});

	};


	var methods = {
		contarItems : function(options){

			return $(this).find(settings.item).length;
		}
	};

	$.fn.paginador = function(method, options){

		var settings = {
			'elementos' : 5,
			'item' : '.item',
			'total' : '0'
		};


		return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	};

})(jQuery);

