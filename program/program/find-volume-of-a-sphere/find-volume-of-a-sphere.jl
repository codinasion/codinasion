print("Enter the radius: ")
radius = parse(Float64, readline(stdin))
volume = 4/3 * 3.14 * radius * radius * radius
println("Volume of sphere: ", volume)
