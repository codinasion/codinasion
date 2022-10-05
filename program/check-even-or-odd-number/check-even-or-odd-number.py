#Checks if the input number is even or odd


#Solution
def checkEven(num):
    return ((num % 2) == 0)



isEven = checkEven(3)
print(f"Is 3 an even number? {isEven}")

isEven = checkEven(4)
print(f"Is 4 an even number? {isEven}")