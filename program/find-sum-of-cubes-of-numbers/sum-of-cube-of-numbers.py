# Python program to find sum of elements in list
 
total = 0
 
# given list
list1 = [1, 2, 3, 4, 5]
 
# Iterate each element in list 
# and add their cubes in variable total
for i in range(0, len(list1)):
    total = total + list1[i]*list1[i]*list1[i]
 
# printing total value
print("Sum of cube of elements in given list: ", total)