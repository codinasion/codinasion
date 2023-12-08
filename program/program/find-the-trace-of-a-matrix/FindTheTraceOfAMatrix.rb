############################################
# Program: FindTheTraceOfAMatrix.rb.rb
# Author: github.com/ErnaneJ
# Created At: December 7, 2023
############################################

def matrix_trace(matrix)
  size = matrix.length
  unless matrix.all? { |row| row.is_a?(Array) && row.length == size }
    raise "Error: The matrix is ​​not square."
  end

  (0...size).map{|i| matrix[i][i] }.sum # Calculate the trace of the matrix
end