// 1 day = 24 hours = 1440 minutes = 86400 seconds

function converter(n){
    return n * 86400;
}

const daysInSeconds = converter(5);
console.log(daysInSeconds);