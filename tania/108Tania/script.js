//pra ver se as coisas estáo interligadas
console.log("Hello world");
//post/get/delete/put
//post é para enviar informação



//parampesquisa é uma string,assim temso que por tb uma string dentro,ou seja, dentro do link
//$.get("https://www.googleapis.com/books/v1/volumes?q=spiderman")
function pesquisar(paramPesquisa) {
    $.get("https://www.googleapis.com/books/v1/volumes?q=" + encodeURI(paramPesquisa))
        .done(function (data) {

            
            console.log(data);
        }).fail(function (data) {
            console.log(data);
        })
}
$("#executa_pesquisa").click(function () {
    var chi = $("#pesquisa").val();
    pesquisar(chi);
});