var times=0;
$(".designbtn").on("click", function(){
    times++;
    if (times%2===1){
        $("#designparagraph").fadeIn("slow");
        $('.designbtn').css({
            'display': 'none',

        });


    }
    else{
        $("#designparagraph").fadeOut("slow");

    }

});

var times2=0;

$("#devbtn").on("click", function(){
    times2++;
    if (times2%2===1){
        $("#devparagraph").fadeIn("slow");
        $('#devbtn').css({
            'display': 'none',

        });
    }
    else{
        $("#devparagraph").fadeOut("slow");

    }

});

var times3=0;

$("#productbtn").on("click", function(){
    times3++;
    if (times3%2===1){
        $("#productparagraph").fadeIn("slow");
        $('#productbtn').css({
            'display': 'none',


        });
    }
    else{
        $("#productparagraph").fadeOut("slow");

    }

});













