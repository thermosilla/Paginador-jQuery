
//Ejemplo de uso del paginador
//Utiliza el plugin jPaginate (http://tympanus.net/jPaginate/) para crear el navegador de páginas

$(document).ready(function(){
var items = 5; //Cantidad de elementos por página
var total = $("#seccion").paginar({elementos: items, item:"#elemento"}); //Divide el elemento padre y entrega la cantidad total de páginas

$("#paginador").paginate({count: total, rotate: false, onChange: function(page){$("#seccion").cambiaPagina({pagina: page, elementos: items})}});

});

