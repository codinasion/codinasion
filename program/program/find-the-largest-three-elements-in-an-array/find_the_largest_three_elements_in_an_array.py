def main():
    seq = [10, 4, 3, 50, 23, 90, 1, 100, 49]
    print(largest_three_elements(seq))


def largest_three_elements(S):
    """Return the three largest elements of sequence S"""
    max1 = S[0]
    max2 = S[0]
    max3 = S[0]

    for val in S:
        if val > max1:
            max3 = max2
            max2 = max1
            max1 = val
        elif val > max2:
            max3 = max2
            max2 = val
        elif val > max3:
            max3 = val
    return (max1, max2, max3)


if __name__ == "__main__":
    main()
