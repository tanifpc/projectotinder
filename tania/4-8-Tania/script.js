

$('.primeiro').click(function(){
    $("#startPage").hide();
    $("#mainPage").show();
    $('#Primeirotitulo').hide();
});

function Library(){                                       
    this.livros = [ ]; 
    this.index = 0;
    var count = [0,0];

                                                         
    this.addLivro = function (livro){                    
        this.livros.push(livro); 
    }

    this.gostar= function(){
        this.livros[this.index-1].likes++;
        count[0]++;
        $('#likesLabel').text(count[0]);
        //this.calcular_likes();
        this.nextLivro();
    }

    this.naogostar= function(){
        this.livros[this.index-1].dislikes++;
        count[1]++;
        $('#dislikesLabel').text(count[1]);
        //this.calcular_dislikes();
        this.nextLivro();
    }  

    this.nextLivro = function(){

        if ((this.index) < this.livros.length){
            var livro= this.livros[this.index];
            livro.render();
            this.index ++;  
        }
        else{
            //qq();
            $("#mainPage").hide();  
            $("#endPage").show();
        } 
    }                   
}

/*

this.calcular_likes = function(){

    var sim = 0;

    for(var i = 0; i < this.books.length ; i++){
        sim += this.books[i].likes;
    }
    return sim;
}

this.calcular_dislikes = function(){

    var nao = 0;

    for(var i = 0; i < this.books.length ; i++){
        nao += this.books[i].dislikes;
    }
    return nao;
}
*/





function Livro (title,img,descricao,linkEditora1,linkEditora2){         
    this.title = title;
    this.img = img;
    this.descricao = descricao; 
    this.linkEditora1= linkEditora1;
    this.linkEditora2= linkEditora2;
    this.likes = 0;
    this.dislikes = 0;

    this.render = function(){
        $("#title").html(this.title);
        $("#img").attr('src',this.img);
        $("#descricao").text(this.descricao);
        $("#linkEditora1").attr('href',this.linkEditora1);
        $("#linkEditora2").attr('href',this.linkEditora2);
    }
}

var livro1 = new Livro ("Triplo","http://2.bp.blogspot.com/-3IXVMR6zk_g/UXUYmOZJsfI/AAAAAAAAGJk/Mw0JQchwVno/s0600/Triplo.jpg","No ano de 1968, Israel esteve por detrás do desaparecimento de 200 toneladas de urânio, material destinado a dotar o Egito da bomba atómica com a ajuda da União Soviética. Contudo nunca se conseguiu determinar como é que um carregamento daquele minério, suficiente para produzir30 armas nucleares, desapareceu no mar alto sem deixar provas que comprometessem Israel. Follett pegou nesta enigmática ocorrência e criou a partir dela um thriller único, onde um suspense de alta voltagem secombina com factos históricos.", "http://www.fnac.pt/Triplo-Ken-Follett/a679570?origin=GOOGLE_DSA&gclid=CjwKEAjw47bLBRDkgorklobUklESJAAGH4-RVELNAErlrQ1Bj6m9FWh5sRc5cjKC9Xx0fUyrsvKOfhoCMmXw_wcB", "https://www.presenca.pt/livro/triplo/");
var livro2 = new Livro ("O Estilete Assassino","http://2.bp.blogspot.com/-ABFS0rPxrr4/VSxuf2b8c2I/AAAAAAAACzU/VX2xLJh5mhg/s1600/oestilete.jpg","Um agente secreto de Hitler, um assassino frio e profissional com o nome de código «Agulha», vê-se envolvido na manobra de diversão dos aliados que antecede o desembarque militar em França. Estamos em 1944, a semanas do Dia D.'O Estilete Assassino'é um arrebatador bestseller internacional em que o destino da guerra assenta nas mãos de um espião, do seu adversário e de uma mulher corajosa.", "http://www.bertrandeditora.pt/livros/ficha/o-estilete-assassino?id=14608324", "http://www.fnac.pt/O-Estilete-Assassino-Ken-Follett/a661421");
var livro3 = new Livro ("Uma Fortuna Perigosa","http://1.bp.blogspot.com/-Pc5zUw_MgMM/VRk721eHAUI/AAAAAAAAQ94/6FNk2VkPKN4/s1600/image.jpg","Em 1866, a Windfield School passa por uma tragédia. Um jovem estudante se afoga em um misterioso acidente, e o eventomarca o início de uma série de intrigas que duram mais de três décadas. Os integrantes de uma rica família inglesa, donade um dos maiores bancos de Londres, compõem o centro da trama. Neste thriller, a verdade mantém-se até o fim escondidapor trás de intrigas amorosas e políticas, e assassinatos a sangue-frio.", "https://www.wook.pt/livro/uma-fortuna-perigosa-ken-follett/16219978", "http://www.fnac.pt/O-Estilete-Assassino-Ken-Follett/a661421");

var library = new Library();                        
    library.addLivro(livro1);                        
    library.addLivro(livro2);
    library.addLivro(livro3);
                     


$('#buttonLike').click(function(){
   
    library.gostar();
});

$('#buttonDislike').click(function(){
   
    library.naogostar(); 
});

library.nextLivro();


/*
function qq(){
$.each(library,function(index,livro){
    var bookName = `
        <tr>
            <td>` + livro.title + `
            </td> 
            <td>` + livro.opinion + `
            </td> 
        </tr>
`;

$('#tabelaResult tbody').append(bookName); 
});
}
*/





