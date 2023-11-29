func printDiamondPattern(_ n: Int) {

    for i in 1...n {
        for _ in stride(from: n - i, to: 0, by: -1) {
            print(" ", terminator: "")
        }

        for _ in 1...(2 * i - 1) {
            print("*", terminator: "")
        }

        print()
    }

    for i in stride(from: n - 1, to: 0, by: -1) {
        
        for _ in stride(from: n - i, to: 0, by: -1) {
            print(" ", terminator: "")
        }

        for _ in 1...(2 * i - 1) {
            print("*", terminator: "")
        }
        print()
    }
}

printDiamondPattern(5)
