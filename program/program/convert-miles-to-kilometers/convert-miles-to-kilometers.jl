print("Enter the miles: ")
miles = parse(Float64, readline(stdin))
km =  miles * 1.609
println("Equivalent Kilometers: ", km)
