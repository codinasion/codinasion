"""
There are multiple ways to find the smallest number in an array.
But the simplest way is to use the sort() method provided by python, to sort the array in ascending order.
"""
# Python prog to illustrate the following in a list
def find_len(list1):
    length = len(list1)
    list1.sort()
    print("Second Smallest element is:", list1[1])
 
# Driver Code
list1=[1, 2, 3, 4, 5]
Largest = find_len(list1)