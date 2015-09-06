/**
 * Created by shay on 23/01/2015.
 * Highlight just the word putative in green.
 Highlight just the word incondite in red.
 Highlight just the word paronomasia in pink.
 Highlight just the word sobriquet in purple.
 Highlight just the word lascivious, but not the word anomie in grey.
 Highlight just the word opprobrium in orange.

 */
$(function(){
    $('.one p').css({'background-color':'red'});
    $('.two #three').css({"background-color":"pink"});
    $('.two p').css({'background-color':'purple'});
    $('ul ul li').css({'background-color':'grey'});
    $('.two>h1>span').css({'background-color':'orange'});
});

$(function(){
   $('.click em').click(function(){
       $('.one h1').html(($(this).html()));
   });

});

$(function(){
    $('body *').each(function(){
        var top = Math.random() * 500;
        var left = Math.random() * 500;
        $(this).css({"position":"absolute",
                        "top": top,
                        "left":left})
    });
});

