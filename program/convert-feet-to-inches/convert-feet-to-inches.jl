println("Enter value in feet: ")
feet = readline()
feet = parse(Int, feet)
inches = feet * 12
println(feet, " feet equals ", inches, " inches")