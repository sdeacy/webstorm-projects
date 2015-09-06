/**
 * Created by shay on 13/12/2014.
 */
$('#show').prepend('prepend'); //adds to the beginning of the element

$('#show').append('append'); //adds to the end of the element

$('#show').after('after'); //adds after the element

$('#show').before('before'); //adds before the element

$('<p>insertBefore</p>').insertBefore('#show'); //inserts the html or element before the selected element ie #show

$('<p>insertAfter</p>').insertAfter('#show');   //inserts the html or element before the selected element, ie #show

$('#mover').insertBefore('#show');  //the div #mover is moved to before the selected element, #show

$('#show').before('#mover');  //'.before' doesn't select the div #mover, just shows the text


