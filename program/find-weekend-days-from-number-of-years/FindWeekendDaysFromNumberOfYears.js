// Run the program using NodeJS
// type in terminal:
// node FindWeekendDaysFromNumberOfYears.js

//solution
const weekendDays = 104
function weekendsInYear(year){
    if(year<=0){
        console.log(`Please enter valid year: ${year} invalid`)
    }else if(isNaN(year)){
        console.log(`Please enter a number: ${year} is not a number`)
    }else{
        console.log(`total weekend days: ${year*weekendDays}`)
    }
}

weekendsInYear(1)