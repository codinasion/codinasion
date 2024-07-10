def ternary_search(arr, value):
    l, r = 0, len(arr) - 1

    while l <= r:
        partition_size = (r - l) // 3
        mid1 = l + partition_size
        mid2 = r - partition_size

        if arr[mid1] == value:
            return mid1

        if arr[mid2] == value:
            return mid2

        if value < arr[mid1]:
            r = mid1 - 1
        elif value > arr[mid2]:
            l = mid2 + 1
        else:
            l = mid1 + 1
            r = mid2 - 1

    return -1


# Example usage
arr = [1, 2, 3, 4, 5]
value = 4
result = ternary_search(arr, value)

if result != -1:
    print(f"Element {value} found at index {result}")
else:
    print(f"Element {value} not found in the array")
