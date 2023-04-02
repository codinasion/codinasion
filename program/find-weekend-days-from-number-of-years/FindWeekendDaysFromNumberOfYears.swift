import Foundation

func isLeapYear(_ year: Int) -> Bool {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)
}

func countWeekendDays(inYears years: Int) -> Int {
    let currentDate = Date()
    let calendar = Calendar.current
    let currentYear = calendar.component(.year, from: currentDate)
    
    var weekendDays = 0
    for year in currentYear..<(currentYear + years) {
        weekendDays += 104 // 52 weekends * 2 days per weekend
        
        if isLeapYear(year) {
            let leapYearStartDate = calendar.date(from: DateComponents(year: year, month: 1, day: 1))!
            let leapYearStartDay = calendar.component(.weekday, from: leapYearStartDate)
            
            if leapYearStartDay == 7 { // Saturday
                weekendDays += 1
            } else if leapYearStartDay == 6 { // Friday
                weekendDays += 2
            }
        }
    }
    
    return weekendDays
}

// Example usage
let numberOfYears = 1
let totalWeekendDays = countWeekendDays(inYears: numberOfYears)
print("Total weekend days in \(numberOfYears) years: \(totalWeekendDays)")
