console.log(
	"JavaScript program to convert Days to minutes \n 1 day = 1440 minute"
);

const daysToMinutes = (num) => {
	return num * 1440;
};

let days = 5;
console.log("Input  : " + days);
console.log("Output : " + daysToMinutes(days));