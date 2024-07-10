println("Enter value in days: ")
days = readline()
days = parse(Int, days)
seconds = days * 86400
println(days, " days equals ", seconds, " seconds")