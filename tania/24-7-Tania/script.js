

/*
contador de gosto e nao gosto:

        var likes= 0;
        $('.btnbtn-info').click(function(){
            likes++;
            jQuery('#likesLabel').text(likes);
        });

        var likes= 0;
        $('.btnbtn-primary').click(function(){
            --likes;
            jQuery('#likesLabel').text(likes);
        });

                                //https://www.tutorialspoint.com/jquery/jquery-selectors.htm
                                //$('.return class')
                                //$('#return id')


                
esta funcao é substituida pela seguinte
        $('.btnbtn-info').click(function(){     // chamo o id do meu botao ao clicar
            $book=$(this).parents('.livro');    //o book vai ser a variavel que com o this vai despoletar o chamamento do parent livro (o botao e filho do livro)
            $book.removeClass("active");        // remove a class da active (o primeiro livro)
            $nextBook=$book.next();             // o nextBook vai ser a variavel que vai identificar/procurar o irmao da variavel book (o botao) por ordem
            $nextBook.addClass("active");       // aqui vai buscar o irmao
        });
*/


document.getElementById("horas").innerHTML= Date();
/*
$likes= [];
$('.btnbtn-info').click(function(){
    $likes.push("gosto");                         // empurrar o like para dentro da array
    showNext($(this));
});

$('.btnbtn-primary').click(function(){
$likes.push("nao gosto");                         // empurrar o like para dentro da array
    showNext($(this));
});


function showNext($button){
    $book=$button.parents(".livro");        //a minha class é livro
    $book.removeClass("active");
    $nextBook=$book.next();
    $nextBook.addClass("active");
};
*/
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


var count = [0,0];

        $('.Like').click(function(){
            count[0]++;
            $('#likesLabel').text(count[0]);
        });

        $('.Dislike').click(function(){
            count[1]++;
            $('#dislikesLabel').text(count[1]);
        });
