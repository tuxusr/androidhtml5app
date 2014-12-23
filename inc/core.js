// carrega variáveis
$( document ).ready(function() {
	$("title").html("Meu App");
	$("#projname").html("Meu app");
});

// links
$("#servicos").click(function() { abrePagina("servicos"); });

// teste com função usando json para capturar, via api, dados armazenados na mongolab
function listabancos() {
	$("#div_listabancos").html("Carregando...");
    $.getJSON( "https://api.mongolab.com/api/1/databases/cadastros/collections/servicos?apiKey=vsdj4BRnrA9BBDoG1kqTnpB4dZlXsy8N", function( data ) {
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
