/*console.log("Hello World");

var novoNumero = 10;
var xhr = new XMLHttpRequest();
xhr.open('get','part_do_site.html');

xhr.onreadystatechange = function (){
    var DONE =4;
    var OK = 200;

    if(xhr.readyState == DONE){
        if(xhr.status == OK){
            console.log(xhr.responseText);

            document.getElementById("parte1").innerHTML=xhr.responseText;
        }
        else{
            console.log("Error "+xhr.status);
        }
    }
};

function mudaParte1(){
    xhr.send(null);

}
//funcao para o botao:
*/

$("#botao1").click(function(){
    $.get('part_do_site.html').done(function(data){
        console.log(data);
        $("#parte1").html(data);
    }).fail(function(data){
        console.log("Error "+data);
    })
})