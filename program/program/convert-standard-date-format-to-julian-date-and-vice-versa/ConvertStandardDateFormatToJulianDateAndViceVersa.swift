import Foundation

func convertToJulianDate(dateString: String) -> String? {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "yyyy-MM-dd"
    dateFormatter.locale = Locale(identifier: "en_US_POSIX")
    
    if let date = dateFormatter.date(from: dateString) {
        let year = Calendar.current.component(.year, from: date)
        let dayOfYear = Calendar.current.ordinality(of: .day, in: .year, for: date)!
        
        return String(format: "%04d%03d", year, dayOfYear)
    }
    
    return nil
}

func convertFromJulianDate(julianDateString: String) -> String? {
    guard julianDateString.count == 7,
          let year = Int(julianDateString.prefix(4)),
          let dayOfYear = Int(julianDateString.suffix(3)) else {
        return nil
    }
    
    var dateComponents = DateComponents()
    dateComponents.year = year
    dateComponents.day = dayOfYear
    
    if let date = Calendar.current.date(from: dateComponents) {
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd"
        dateFormatter.locale = Locale(identifier: "en_US_POSIX")
        
        return dateFormatter.string(from: date)
    }
    
    return nil
}

// Example Usage
let standardDate = "2023-06-10"
if let julianDate = convertToJulianDate(dateString: standardDate) {
    print("Julian Date: \(julianDate)")
}

let julianDate = "2023160"
if let standardDate = convertFromJulianDate(julianDateString: julianDate) {
    print("Standard Date: \(standardDate)")
}
