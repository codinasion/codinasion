func printInvertedPyramid(_ n: Int) {
    for i in stride(from: n, to: 0, by: -1) {
        for j in 1...i {
            print(j, terminator: " ")
        }
        print()
    }
}

// Example usage with input 5
let input = 5
printInvertedPyramid(input)

