// carrega variáveis
var nomeApp = "Meu App";
$( document ).ready(function() {
	$("title").html(nomeApp);
	$("#projname").html(nomeApp);
});

// outros
function carrega(id){
    $("#"+id).html("<div id='carrega'><img src='inc/loader.gif'></div>");
}

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
	carrega("div_listabancos");
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
	carrega("conteudo");
	$("#conteudo").load("pages/"+pagina+".htm");
}

// PÁGINA SERVIÇOS
// quando estiver na página de cadastro, ao clicar no botão Listar serviços, será mostrado a listagem
function listarServicos(){
    carrega("conteudoservicos");
    $('#listar').hide();
    $('#cadastrar').show();
    $('#conteudoservicos').load("scripts/servicosLista.htm");
}
// faz o cadastro de novos serviços
function novoServico(){
    carrega("conteudoservicos");
    $('#listar').show();
    $('#cadastrar').hide();
    $('#conteudoservicos').load("scripts/servicosNovo.htm");
}