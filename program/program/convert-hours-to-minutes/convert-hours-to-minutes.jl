println("Enter value in hours: ")
hours = readline()
hours = parse(Int, hours)
minutes = hours * 60
println(hours, " hours equals ", minutes, " minutes")