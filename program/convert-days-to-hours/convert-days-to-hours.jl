println("Enter value in days: ")
days = readline()
days = parse(Int, days)
hours = days * 24
println(days, " days equals ", hours, " hours")