function print_inverted_pyramid(n)
  for i in 1:n
      for j in 1:(n-i+1)
          print(j, " ")
      end
      println()
  end
end

# sending parameters to function
n = 5
print_inverted_pyramid(n)
