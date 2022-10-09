//
//  ConvertBinaryToDecimal.swift
//
//
//  Created by Shamsuddin Refaei on 06/10/2022.
//

import Foundation

// Sample input
let binaryNumber = "1010101010"

func convertToDecimal(binary: String) -> Int {
    
    // Reverse binary number to allow easy iteration with for loop
    let reversedBinaryNumber = String(binaryNumber.reversed())

    // Initialse power & total
    var p = 0
    var total = 0

    for i in reversedBinaryNumber {
        
        let int = i.wholeNumberValue    // Convert character to integer
        // If character can be converted, do following
        if let int = int {
            
            total += int * Int(pow(Double(2), Double(p)))   // Apply algorithm
            p += 1
        }
        // If character cannot be converted, print error
        else {
            
            print("Value \(i) cannot be converted to int")
        }
    }
    
    return total
}

// Sample output
let result = convertToDecimal(binary: binaryNumber)
