print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
print("Enter the height: ")
height = parse(Float64, readline(stdin))
volume = 3.14 * radius * radius * height
println("Volume of cylinder: ", volume)
