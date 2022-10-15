#PYTHON program to find smallest number
l=[ int(l) for l in input("Create an array:").split(",")]
print("Your list is",l)
#Assign first element as minimum
min1=l[0]
for i in range(len(l)):
    #check if other element is min than first element
    if l[i] < min1:
        min1 = l[i]
print("Smallest number in the list is ",min1)
