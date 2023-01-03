# Python program for maximum contiguous circular sum problem


def max_cont_sum(a, n):

    # Corner Case
    if n == 1:
        return a[0]

    sum = 0
    for index in range(n):
        sum = sum + a[index]

    # Initialize every variable
    # with first value of array.
    current_maximum = a[0]
    max_so_far = a[0]
    current_minimum = a[0]
    min_so_far = a[0]

    # Concept of Kadane's Algorithm
    for i in range(1, n):

        # Kadane's Algorithm to find Maximum subarray sum.
        current_maximum = max(current_maximum + a[i], a[i])
        max_so_far = max(max_so_far, current_maximum)

        # Kadane's Algorithm to find Minimum subarray sum.
        current_minimum = min(current_minimum + a[i], a[i])
        min_so_far = min(min_so_far, current_minimum)

    if min_so_far == sum:
        return max_so_far

    # returning the maximum value
    return max(max_so_far, sum - min_so_far)


input_string = input("Input : ")

a = input_string.split(", ")
n = len(a)

arr = {}

for item in range(n):
    arr[item] = int(a[item])

print("Output : ", max_cont_sum(arr, n))
