matrix = [ [1 ,2, 3], [4, 5, 6], [7, 8, 9] ]
n = 3
temp_matrix = Array.new(n){Array.new(n)}
for i in 0...n
  for j in 0...n
    temp_matrix[j][n-i-1] = matrix[i][j]
  end
end

puts temp_matrix.inspect
