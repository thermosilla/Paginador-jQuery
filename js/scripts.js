$(document).ready(function(){
	var items = 4;
	var total = $("#seccion").paginar({elementos: items});

	$("#paginador").paginate({count: total, rotate: false, onChange: function(page){$("#seccion").cambiaPagina({pagina: page, elementos: items})}});
});

