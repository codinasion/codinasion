# Python program to find maximum contiguous subarray

# Function to find the maximum contiguous subarray
def maxSubArraySum(a, size):

	max_so_far = a[0]
	max_ending_here = a[0]

	for i in range(1, size):
		max_ending_here = max_ending_here + a[i]
		if (max_so_far < max_ending_here):
			max_so_far = max_ending_here

		if max_ending_here < 0:
			max_ending_here = 0
	return max_so_far

# Driver function to check the above function


a = [-2, -3, 4, -1, -2, 1, 5, -3]

print("Maximum contiguous sum is", maxSubArraySum(a, len(a)))
