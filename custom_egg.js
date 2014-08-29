/*
 * Created by gillian on 8/29/14.
 */

window.onload = function() {
    setInterval(function(){ tick() }, 1000);
}

function tick() {
    var countdown = document.getElementById("countdown");
    var diff = timeDiffStr("2014-10-19T11:50:00");
    countdown.innerHTML = diff;
}

function timeDiffStr( futureDateString ) {
    var now = new Date();
    //console.log(now);

    var future = new Date(futureDateString);
    //console.log(future);

    var diff = future - now;
    //console.log(diff);

    var days = diff / (24 * 60 * 60 * 1000);
    var hours = (diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000);
    var mins = ((diff % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) / (60 * 1000);
    var secs = (((diff % (24 * 60 * 60 * 1000)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000;
    /*console.log('days' + days);
    console.log('h' + hours);
    console.log('m' + mins);
    console.log('s' + secs);*/

    return Math.floor(days) + " days " + Math.floor(hours) + " hours " + Math.floor(mins) + " minutes " + Math.floor(secs) + " seconds ";

}

