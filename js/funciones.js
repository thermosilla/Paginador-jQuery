(function($) {

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

})(jQuery);

