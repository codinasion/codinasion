require 'matrix'

def matrix_inverse(matrix)
  a = Matrix[*matrix]
  
  # Check if the matrix is square
  if a.row_size != a.column_size
    puts "The matrix is not square and does not have an inverse."
    return
  end
  
  # Check if the matrix is invertible
  if a.det == 0
    puts "The matrix is not invertible."
    return
  end
  
  a_inv = a.inverse
  
  # Print the inverse matrix with floating-point numbers
  a_inv.to_a.each do |row|
    row.each { |element| print "#{element.to_f} " }
    puts
  end
end

# Example input matrix (invertible)
input_matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

# Find and print the inverse
matrix_inverse(input_matrix)
