function find_smallest_element(matrix)
    min_val = minimum(matrix)
    return min_val
end

# Example matrix
matrix = [4 7 3;
          9 4 2;
          0 6 4]

smallest_element = find_smallest_element(matrix)
println("The smallest element in the matrix is: ", smallest_element)
