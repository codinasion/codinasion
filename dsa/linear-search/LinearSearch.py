# Linear Search in Python


def linearSearch(array, n, x):

    # Going through array sequencially
    for i in range(0, n):
        if (array[i] == x):
            return i
    return -1


array = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170]
x = 80
n = len(array)
print(linearSearch(array, n, x))