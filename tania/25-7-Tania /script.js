



var livro1 = {
    title: "Triplo",
    image: "http://2.bp.blogspot.com/-3IXVMR6zk_g/UXUYmOZJsfI/AAAAAAAAGJk/Mw0JQchwVno/s0600/Triplo.jpg",
    Descricao: "No ano de 1968, Israel esteve por detrás do desaparecimento de 200 toneladas de urânio, material destinado a dotar o Egito da bomba atómica com a ajuda da União Soviética. Contudo nunca se conseguiu determinar como é que um carregamento daquele minério, suficiente para produzir30 armas nucleares, desapareceu no mar alto sem deixar provas que comprometessem Israel. Follett pegou nesta enigmática ocorrência e criou a partir dela um thriller único, onde um suspense de alta voltagem secombina com factos históricos.",
    links: 
        {linkEditora:"http://www.fnac.pt/Triplo-Ken-Follett/a679570?origin=GOOGLE_DSA&gclid=CjwKEAjw47bLBRDkgorklobUklESJAAGH4-RVELNAErlrQ1Bj6m9FWh5sRc5cjKC9Xx0fUyrsvKOfhoCMmXw_wcB",
        linkEditora1:"https://www.presenca.pt/livro/triplo/"}
}
var livro2 = {
    title: "O Estilete Assassino",
    image: "http://2.bp.blogspot.com/-ABFS0rPxrr4/VSxuf2b8c2I/AAAAAAAACzU/VX2xLJh5mhg/s1600/oestilete.jpg",
    Descricao: "Um agente secreto de Hitler, um assassino frio e profissional com o nome de código «Agulha», vê-se envolvido na manobra de diversão dos aliados que antecede o desembarque militar em França. Estamos em 1944, a semanas do Dia D.'O Estilete Assassino'é um arrebatador bestseller internacional em que o destino da guerra assenta nas mãos de um espião, do seu adversário e de uma mulher corajosa.",
    links: 
        {linkEditora:"http://www.bertrandeditora.pt/livros/ficha/o-estilete-assassino?id=14608324",
        linkEditora1:"http://www.fnac.pt/O-Estilete-Assassino-Ken-Follett/a661421"}
}
var livro3 = {
    title: "Uma Fortuna Perigosa",
    image: "http://1.bp.blogspot.com/-Pc5zUw_MgMM/VRk721eHAUI/AAAAAAAAQ94/6FNk2VkPKN4/s1600/image.jpg",
    Descricao: "Em 1866, a Windfield School passa por uma tragédia. Um jovem estudante se afoga em um misterioso acidente, e o eventomarca o início de uma série de intrigas que duram mais de três décadas. Os integrantes de uma rica família inglesa, donade um dos maiores bancos de Londres, compõem o centro da trama. Neste thriller, a verdade mantém-se até o fim escondidapor trás de intrigas amorosas e políticas, e assassinatos a sangue-frio.",
    links: 
        {linkEditora:"https://www.wook.pt/livro/uma-fortuna-perigosa-ken-follett/16219978",
        linkEditora1:"http://www.fnac.pt/O-Estilete-Assassino-Ken-Follett/a661421"}
}


var library = [livro1,livro2,livro3];

function loadData(){
    var HTMLtoInsert = `
            <div class="livro col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-1">
                <img alt=""height="300"></img>
                <h2><u>  </u></h2>  
                <br><h3>Descricão</h3></br>
                <p class= "p1 text-info"> </p>
             <div> 
                <button class="btn btn-info Like" type= "button"> 
                <span class="glyphicon glyphicon-ok"></span> gosto</button>
                <button class="btn btn-primary Dislike"type= "button">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>nao gosto</button>
            </div> 
                <ul>   
                <li><a class="linkEditora"> </a></li>
                <li><a class="linkEditora1"> </a></li>
                </ul> 
            </div>`;

$.each(library,function(index,livro){
   $('#bookContainer').append(HTMLtoInsert);        // vamos inserir o html la no fim usando assim o append
    //    $('.livro').last()                         vai chammar todos os livros e vai buscar o ultimo 
    //    $('.livro').eq()                           vai chammar todos os livros por array pela posicao// 
        $lastInserted= $('.livro:last-child'); //vai buscar o ultimo child do book container
       
/*  $('.livro p').text (livro1.Descricao);
    $('.livro img').attr ('src',livro1.image);
    $('.livro h2').text (livro1.title);
    $('.livro a').attr ('href',livro1.links.linkEditora); 
});
*/
   $('p', $lastInserted).text (livro.Descricao);
    $(' img', $lastInserted).attr ('src',livro.image);
    $('h2', $lastInserted).text (livro.title);
    $('a.linkEditora').attr ('href',livro.links.linkEditora); 
    $('a.linkEditora1').attr ('href',livro.links.linkEditora1);
});

$('.livro:first-child').addClass('active');

}
loadData();






$('.Like').click(function(){
    var $next = $('.livro.active').removeClass('active').next('.livro');
    if ($next.length) {
        $next.addClass('active'); 
    }
    else {
        $(".livro:first").addClass('active');
    }
});
$('.Dislike').click(function(){
    var $next = $('.livro.active').removeClass('active').next('.livro');
    if ($next.length) {
        $next.addClass('active'); 
    }
    else {
        $(".livro:first").addClass('active');
    }
});


document.getElementById("horas").innerHTML= Date();



var count = [0,0];

        $('.Like').click(function(){
            count[0]++;
            $('#likesLabel').text(count[0]);
        });

        $('.Dislike').click(function(){
            count[1]++;
            $('#dislikesLabel').text(count[1]);
        });
