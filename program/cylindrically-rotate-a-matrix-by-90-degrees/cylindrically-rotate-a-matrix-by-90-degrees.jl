function rotateMatrix(matrix)
    return reverse(transpose(matrix))
end

println("Enter the matrix dimensions (rows columns):")
dims = split(readline())
numRows = parse(Int, dims[1])
numCols = parse(Int, dims[2])
println("Enter the matrix elements:")
matrix = [[parse(Int, x) for x in split(readline())] for i in 1:numRows]

# Rotate the matrix and print out the result
rotatedMatrix = rotateMatrix(matrix)
println("Rotated matrix:")
for row in rotatedMatrix
    println(join(row, " "))
end
#Example Usage

#Enter the matrix dimensions (rows columns):3 3
#Enter the matrix elements:
#1 2 3
#4 5 6
#7 8 9
#Rotated matrix:
#7 8 9
#4 5 6
#1 2 3 