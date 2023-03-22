let date = prompt("Enter a date (YYYY-MM-DD): ");

function isValidDate(date) {
  return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date);
}

date = new Date(date);

if (isValidDate(date)) {
  console.log("True");
} else {
  console.log("False");
}