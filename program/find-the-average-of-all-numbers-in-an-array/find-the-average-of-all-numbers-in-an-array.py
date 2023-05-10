def listAverage(array, n1):
    arraysum = 0
    for j in range(n1):
        arraysum += array[j]
    avg = arraysum / (n1)
    return avg


###########  Main Program ########################

n = int(input("Enter the number of elements in the array"))
arr = []  # Initializing an empty array
for i in range(n):
    a = int(input("Enter  the element value :"))
    arr.append(a)
res = listAverage(arr, n)
print("The average of all the elements in the list is:", res)
