function secondsToHMS(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hourDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var minDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var secDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hourDisplay + minDisplay + secDisplay; 
}


console.log(secondsToHMS(18000))
