let seconds = 60;
let minutes = Math.floor(seconds / 60);
let extraSeconds = seconds % 60;
minutes = minutes < 10 ? "0" + minutes : minutes;
extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;
console.log(`${minutes}mins : ${extraSeconds}secs`);
