print("Enter a string: ")
str = readline(stdin)
println(String([i%2 == 0 ? uppercase(c) : c for (i, c) in enumerate(str)]))
