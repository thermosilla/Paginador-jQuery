/*!
 * Plugin paginador para JQuery
 * @version: 1.0
 * @author: 2011 Tomás Hermosilla
 * @licence: GNU/GPLv2.
 */

(function($) {

	$.fn.extend({
		paginador : function(options){
			var defaults = {
				'elemento' : '.elemento',
				'elementos': 5,
				'raiz' : 'pag'
			};

			var options = $.extend(defaults, options);

			var o = options;
			var obj = $(this);
			var items = $(o.elemento, obj);

			var total = items.length;
			var parentSelector = "#"+o.raiz;

			this.cambiaPagina = function(pag){
				var ini = o.elementos*pag;
				var fin = ini + o.elementos;

				var content = items.slice(ini,fin);

				if ($(parentSelector).length == 0)
				{

					obj.before("<div id='"+o.raiz+"'></div>");
				}

				$(parentSelector).html("");

				content.each(function(){
					$(parentSelector).append($(this).clone());
				});

				obj.hide();

				return this;
			};

			this.getPaginas = function(){
				var paginas = total / o.elementos;

				if(parseInt(paginas)!=paginas){paginas = parseInt(paginas)+1}

				return paginas;
			};

			this.cambiaPagina(0);

			return this;
		}
	});

})(jQuery);

