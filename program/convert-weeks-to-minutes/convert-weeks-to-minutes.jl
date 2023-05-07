println("Enter value in weeks: ")
weeks = readline()
weeks = parse(Int, weeks)
minutes = weeks * 10080
println(weeks, " weeks equals ", minutes, " minutes")