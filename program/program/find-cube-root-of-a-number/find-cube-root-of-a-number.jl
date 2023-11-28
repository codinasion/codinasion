# Read input from the user
print("Enter a number: ")
num = parse(Float64, readline())

# Calculate the cube root
cubeRoot = cbrt(num)

# Print the result
println("Cube root of $num is: $cubeRoot")
