$(document).ready(function() {

    var timeBegan = null,
        timeStopped = null,
        stoppedDuration = 0,
        started = null;
    var currentTime = "";

    $("#timer-start").click(function() {
        if (timeBegan === null) {
            timeBegan = new Date();
        }
        if (timeStopped !== null) {
            stoppedDuration += (new Date() - timeStopped);
        }
        started = setInterval(clockRunning, 10);
    });

    $("#timer-stop").click(function() {
        timeStopped = new Date();
        clearInterval(started);
    });

    $("#timer-reset").click(function() {
        clearInterval(started);
        stoppedDuration = 0;
        timeBegan = null;
        timeStopped = null;
        started = null;
        currentTime = "";
        document.getElementById("display-area").innerHTML = "00:00:00.000";
        document.getElementById('laptime').innerHTML = "";
        document.getElementById('laptime').rows = 1;
    });

    function clockRunning() {
        currentTime = new Date(), timeElapsed = new Date(currentTime - timeBegan - stoppedDuration), hour = timeElapsed.getUTCHours(), min = timeElapsed.getUTCMinutes(), sec = timeElapsed.getUTCSeconds(), ms = timeElapsed.getUTCMilliseconds();
        currentTime = (hour > 9 ? hour : "0" + hour) + ":" +
            (min > 9 ? min : "0" + min) + ":" +
            (sec > 9 ? sec : "0" + sec) + "." +
            (ms > 99 ? ms : ms > 9 ? "0" + ms : "00" + ms);
        document.getElementById("display-area").innerHTML = currentTime;
    };

    $("#timer-lap").click(function() {
        var t = document.getElementById('laptime');
        t.innerHTML = t.innerHTML + "\n" + currentTime;
        t.rows++;
    });
});