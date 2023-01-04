function isValidDate(d: string | number | any): boolean {
    if (Object.prototype.toString.call(d) === "[object Date]") {
        // it is a date
        if (isNaN(d)) { // d.getTime() or d.valueOf() will also work
            // date object is not valid
            return false
        } else {
            // date object is valid
            return true
        }
    } else {
        return false
        // not a date object
    }
}

console.log(isValidDate(new Date))
