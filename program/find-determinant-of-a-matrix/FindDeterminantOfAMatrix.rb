# frozen_string_literal: true

require 'matrix'

def determinant(matrix)
  matrix.determinant
end

if $PROGRAM_NAME == __FILE__
  print 'Dimension : '
  dimension = gets.chomp.to_i
  input_matrix = []
  puts 'Input     :'
  dimension.times do
    input_matrix << gets.chomp.split.map(&:to_i)
  end
  begin
    matrix = Matrix[*input_matrix]
    puts "Output    :\n#{determinant(matrix)}"
  rescue ExceptionForMatrix::ErrDimensionMismatch => e
    puts "Error     : #{e.message}"
  end
end
