/**
 * Created by shay on 30/12/2014.
 */

//how to display current time
    var currentTime = function () {
    var now =  new Date();
    $('#time-span').html(now.getTime());
}
currentTime();

//read in
$('#butt').click(function(){
    var task = prompt("What are you going to do now?");
    var taskStartTime = new Date();
    $('#time-span').html(task +" started at "+taskStartTime);
    var timerID = setTimeout(timesUp,1000);
});

var timesUp = function(){
    document.getElementById('audiotag1').play();
    alert("Take 5 mins");
};
