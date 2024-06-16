def main():
    """
    Return the two largest elements from a nonempty Python list (array)
    1. Sort the array
    2. Return the last two elements from the sorted array

    Asymptotic analysis
    By sorting the sequence of the elements, elements will be placed next to each other. Therefore
    1. built in function sorted guarantees a worst case running time of O(n log n)
    2. return tuple assignment is in constant time O(1)

    """
    seq = [12, 13, 1, 10, 34, 35]  # Test with various sequences

    largest, second_largest = find_two_largest_elements(seq)  # unpacking tuple
    print(f"Largest: {largest} || Second largest: {second_largest}")


def find_two_largest_elements(S):
    S_sorted = sorted(S)

    return (S_sorted[-2], S_sorted[-1])  # Return in tuple form


if __name__ == "__main__":
    main()
