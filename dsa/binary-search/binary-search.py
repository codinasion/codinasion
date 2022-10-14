def binarySearch(array, x, low, high):
    while low <= high:
        mid = low + (high - low)//2
        if array[mid] == x:
            return mid
        elif array[mid] < x:
            low = mid + 1
        else:
            high = mid - 1
    return -1

array = input("Input  : ").split(" ")
target = input("Target : ")
result = binarySearch(array, target, 0, len(array)-1)
if result != -1:
    print("Output : " + str(result))
