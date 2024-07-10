/**
 * Uses a simple two-pointers algorithm to find the second smallest element in an array of integers.
 */
func findSecondSmallest(_ array: [Int]) -> Int {
    var min1 = array[0]
    var min2 = array[1]
    if min2 < min1 {
        let temp = min1
        min1 = min2
        min2 = temp
    }
    for elm in array[1..<array.count] {
        if elm < min1 {
            min2 = min1
            min1 = elm
        }else if elm < min2 {
            min2 = elm
        }
    }
    return min2
}

func main() {
    print("Second smallest element is: ", findSecondSmallest([-3, 8, 9, 6, 2, 4, 1]));
}

main()
