print(
    "Python program to find sum of numbers"
)

sumNum = [1, 2, 3, 4, 5]  # Numbers we want to sum
sum = 0

# displays the range of numbers we want to sum
print("Input : " + ' '.join(map(str, sumNum)))

# loop the array and sum each item then add to the sum variable
for i in range(0, len(sumNum)):
    sum += sumNum[i]

print("Output : " + str(sum))
