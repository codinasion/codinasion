inputlist =[]
# list is created
n = int(input("Enter number of element you want to input: "))

for x in range(1,n+1):
    inputlist.append(int(input(f"Enter the number {x}: ")))
# adding elements in the list
cube_sum, x = 0, 0

while x < len(inputlist):
    cube_sum += (inputlist[x] ** 3)
    # adding cube of every number in code_sum
    x += 1
# looping through every number
print(cube_sum)
# printing cube_sum
