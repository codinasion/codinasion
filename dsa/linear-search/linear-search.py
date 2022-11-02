def linearSearch(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(linearSearch(arr, 5))
print(linearSearch(arr, 12))
