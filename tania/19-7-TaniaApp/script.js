

var likes= 0;
$('.btnbtn-info').click(function(){
likes++;
jQuery('#likesLabel').text(likes);
//https://www.tutorialspoint.com/jquery/jquery-selectors.htm
//$('.return class')
//$('#return id')

});



var likes= 0;
function removelike(){
    --likes;

    document.getElementById("likesLabel").innerHTML = likes;
}



document.getElementById("horas").innerHTML= Date();




