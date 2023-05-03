
println("Enter the matrix (each row separated by a newline):")
A = [parse(Float64, x) for x in split(readline(), '\n')]

eigenvals = eigvals(A)

for eigenval in eigenvals
    println(eigenval)
end
