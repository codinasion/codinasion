println("Enter value in days: ")
days = readline()
days = parse(Int, days)
weeks = convert(Int, days / 7)
println(days, " days equals ", weeks, " weeks")