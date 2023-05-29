function secondsToHMS(d: number):string {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hourDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    const minDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    const secDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hourDisplay + minDisplay + secDisplay; 
}


console.log(secondsToHMS(61))
