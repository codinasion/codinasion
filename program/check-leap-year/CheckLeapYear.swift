import Swift
import Foundation

var year = 2016

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
  print("\(year) is a leap year")
} else {
  print("\(year) is not a leap year")
}
