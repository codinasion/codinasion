println("Enter a hexadecimal number: ") 
x = readline()
y = parse(Int, x, base=16)
println("Decimal of ", x, ": ", y)