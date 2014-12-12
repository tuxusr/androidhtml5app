// carrega variáveis
$( document ).ready(function() {
	$("title").html("Beleza Plena");
	$("#projname").html("Beleza Plena");
});

// links
$("#servicos").click(function() { abrePagina("servicos"); });

function listabancos() {
	$("#div_listabancos").html("Carregando...");
	/*$.getJSON(
		"https://api.mongolab.com/api/1/databases/cadastros/collections/servicos?apiKey=vsdj4BRnrA9BBDoG1kqTnpB4dZlXsy8N", 
		function(data){
			$('#nome').text(data.nome);
			$('#valor').text(data.valor);
		}
	);*/
	/*$.getJSON( "https://api.mongolab.com/api/1/databases/cadastros/collections/servicos?apiKey=vsdj4BRnrA9BBDoG1kqTnpB4dZlXsy8N", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + val + "</li>" );
		});
		$( "<ul/>", {
			"class": "my-new-list",
			html: items.join( "" )
		}).appendTo( "#div_listabancos" );
	});*/
	var dados = jQuery.parseJSON("https://api.mongolab.com/api/1/databases/cadastros/collections/servicos?apiKey=vsdj4BRnrA9BBDoG1kqTnpB4dZlXsy8N");
	var i = 1;
	var item = '';
	while(i <= parseInt(dados.qtde_reg)){
		item = item + "Nome: " + dados[i]['nome'] + ", Valor: " + dados[i]['valor'] + "<br>";
		i++;
	}
	$('#div_listabancos').html(item);
}

// funções diversas
function abrePagina(pagina){
	$("#conteudo").html("Carregando...");
	$("#conteudo").load("pages/"+pagina+".htm");
}
