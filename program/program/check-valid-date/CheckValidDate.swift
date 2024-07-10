import Foundation

func isValidDate(_ dateString: String) -> Bool {
    let dateFormatter = DateFormatter()
    dateFormatter.dateFormat = "yyyy-MM-dd"
    dateFormatter.locale = Locale(identifier: "en_US_POSIX")
    dateFormatter.timeZone = TimeZone(secondsFromGMT: 0)
    dateFormatter.isLenient = false
    return dateFormatter.date(from: dateString) != nil
}

// Example usage
let inputDate = "2019-02-29"
let result = isValidDate(inputDate)
print("Output: \(result)")
