println("Enter a octal number: ") 
x = readline()
y = parse(Int, x, base=8)
println("Decimal of ", x, ": ", y)