/**
 Converts time from 24h format into 12h format.

 This function takes a time between 00:00:00 and 23:59:59 and converts it into its corresponding time between 12:00:00 and 11:59:59, AM or PM.

 - Parameters:
    - timeIn24H: A string holding the 24-hour-formatted time, e.g. "15:46:13".

 - Returns: A new Optional string holding the corresponding 12-hout-formatted time, e.g. "3:46:13PM", or nil if the input string is bad.

 - Note: This function does not change the original string.

 - Example:
 let timeIn12H = convert24hto12h("23:52:14") // "11:52:14PM"
 - Author: Levent Çelik
 - Since: December 2023
 - Version: 1.0
 */

func convert24hto12h(_ timeIn24H: String) -> String? {
    let time = timeIn24H.split(separator: ":")
    guard time.count == 3 else {
        print("Invalid Input: (not HH:MM:SS).")
        return nil
    }
    guard let hour = Int(time[0]), hour >= 0 && hour <= 23 else {
        print("Invalid Time: hour out of range (00:00:00 - 23:59:59).")
        return nil
    }
    guard let minute = Int(time[1]), minute >= 0 && minute <= 59 else {
        print("Invalid Time: minute out of range (0 - 59).")
        return nil
    }
    guard let second = Int(time[2]), second >= 0 && second <= 59 else {
            print("Invalid Time: second out of range (0 - 59).")
            return nil
    }
    if hour == 0 {
        return "12:\(time[1]):\(time[2])AM"
    }
    if hour < 12 {
            return "\(hour):\(time[1]):\(time[2])AM"
    }
    if hour == 12 {
            return "\(hour):\(time[1]):\(time[2])PM"
    }
    return "\(hour-12):\(time[1]):\(time[2])PM"
}

// Test Function
func testConvert24hto12h() {
    print("Testing convert24hto12h function")

    // Function to run a test case
    func runTestCase(input: String, expectedOutput: String?) {
        let actualOutput = convert24hto12h(input)
        assert(actualOutput == expectedOutput, "Test Failed: \(input) should be \(expectedOutput ?? "nil"), but was \(actualOutput ?? "nil")")
    }

    // Midnight and Noon Edge Cases
    runTestCase(input: "00:00:00", expectedOutput: "12:00:00AM")
    runTestCase(input: "12:00:00", expectedOutput: "12:00:00PM")

    // Before Noon
    runTestCase(input: "01:30:45", expectedOutput: "1:30:45AM")
    runTestCase(input: "11:59:59", expectedOutput: "11:59:59AM")

    // After Noon
    runTestCase(input: "13:00:00", expectedOutput: "1:00:00PM")
    runTestCase(input: "23:45:30", expectedOutput: "11:45:30PM")

    // Boundary Times (Transition Between AM and PM)
    runTestCase(input: "12:00:01", expectedOutput: "12:00:01PM")
    runTestCase(input: "11:59:59", expectedOutput: "11:59:59AM")

    // Invalid Inputs
    runTestCase(input: "24:00:00", expectedOutput: nil)
    runTestCase(input: "12:60:00", expectedOutput: nil)
    runTestCase(input: "00:00:60", expectedOutput: nil)
    runTestCase(input: "Not a time", expectedOutput: nil)

    // Edge of Valid Range
    runTestCase(input: "23:59:59", expectedOutput: "11:59:59PM")

    print("All tests passed!")
}

// Call the test function
testConvert24hto12h()


