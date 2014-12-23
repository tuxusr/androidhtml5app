// carrega variáveis
var nomeApp = "Meu App";
$( document ).ready(function() {
	$("title").html(nomeApp);
	$("#projname").html(nomeApp);
});

// links
$("#capa").click(function() { 
    abrePagina("capa"); 
	$("#projname").html(nomeApp);
});
$("#agenda").click(function() { 
    abrePagina("agenda"); 
	$("#projname").html(nomeApp+" &raquo; Agenda");
});
$("#clientes").click(function() { 
    abrePagina("clientes"); 
	$("#projname").html(nomeApp+" &raquo; Clientes");
});
$("#financas").click(function() { 
    abrePagina("financas"); 
	$("#projname").html(nomeApp+" &raquo; Finan&ccedil;as");
});
$("#servicos").click(function() { 
    abrePagina("servicos"); 
	$("#projname").html(nomeApp+" &raquo; Servi&ccedil;os");
});

// teste com função usando json para capturar, via api, dados armazenados na mongolab
function listabancos() {
	$("#div_listabancos").html("Carregando...");
    $.getJSON( "https://api.mongolab.com/api/1/databases/cadastros/collections/servicos?apiKey=8nZcOZ7R2GL9ug6DuutJxxm8VspHmVDy", function( data ) {
        var items = [];
        var contador = 0;
        $.each( data, function( key, val ) {
            items.push( "<li id='" + key + "'>" + val.nome + val.valor + key + "</li>" );
        });
        $("#div_listabancos").html("");
        $( "<ul/>", {
            "class": "my-new-list",
            html: items.join( "" )
        }).appendTo( "#div_listabancos" );
	});
}

// funções diversas
function abrePagina(pagina){
	$("#conteudo").html("Carregando...");
	$("#conteudo").load("pages/"+pagina+".htm");
}
