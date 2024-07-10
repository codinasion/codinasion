def main():
    seq = 1, 2, 3, 4, 5, 6, 7  # Test here. Seq should be sorted
    print(binary_search(seq, 90))


def binary_search(data, target):
    """
    locating a target value within a sorted sequence
    return True if target is found
    """
    left = 0
    right = len(data) - 1

    while left <= right:
        mid = (left + right) // 2
        if target == data[mid]:  # Found match!
            return True
        elif target < data[mid]:  # Search values left of mid
            right = mid - 1
        else:  # Search values right of mid
            left = mid + 1
    return False  # loop ended without success


if __name__ == "__main__":
    main()
