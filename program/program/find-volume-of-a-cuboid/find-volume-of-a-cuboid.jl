print("Enter the length: ")
length = parse(Float64, readline(stdin))
print("Enter the width: ")
width = parse(Float64, readline(stdin))
print("Enter the height: ")
height = parse(Float64, readline(stdin))
volume = length * width * height
println("Volume of a cuboid: ", volume)
