print("Enter first number : ")
num1 = parse(Int64, readline(stdin))
print("Enter second number : ")
num2 = parse(Int64, readline(stdin))
num1 = num1+num2
num2 = num1-num2
num1 = num1-num2
println("After Swapping numbers")
println("First number : ", num1)
println("Second number : ", num2)
