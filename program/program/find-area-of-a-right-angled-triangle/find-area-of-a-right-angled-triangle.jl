print("Enter the base : ")
base = parse(Float64, readline(stdin))
print("Enter the height : ")
height = parse(Float64, readline(stdin))
area = 0.5 * base * height
println("Area of right angled triangle : ", area)
