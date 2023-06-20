def print_pascals_triangle(n)
    triangle = []
  
    #Generates Pascal's triangle
    (0...n).each do |row|
        #Creates an empty array for the current row  
        triangle[row] = []  
        (0..row).each do |col|
            if col.zero? || col == row
            #Sets the boundary elements to 1  
            triangle[row][col] = 1
            else
            #Calculates the current element by summing the two elements above it
            triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col]
            end
        end
    end
  
    #Prints Pascal's triangle
    triangle.each do |row|
        #Adds leading spaces to align rows based on the number of elements  
        print ' ' * (n - row.length)
        row.each do |num|
            #Prints each number followed by a space
            print "#{num} "
        end
        #Moves to the next line after printing a row
        puts  
    end
end
  
#Test
n = 5
print_pascals_triangle(n)
