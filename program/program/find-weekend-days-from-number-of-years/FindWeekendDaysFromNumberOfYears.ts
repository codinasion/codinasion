function weekendsInYear(year: number): number{
    const weekendDays: number = 104;
    if(year<=0){
        console.log(`Please enter valid year: ${year} invalid`)
    }else if(isNaN(year)){
        console.log(`Please enter a number: ${year} is not a number`)
    }else{
        console.log(`Total weekend days: ${year*weekendDays}`)
    }
}

weekendsInYear(2)
