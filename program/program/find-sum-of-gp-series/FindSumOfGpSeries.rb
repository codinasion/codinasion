def sum_of_gp(a1, r, n)
  
  sum = a1 * (r**n - 1) / (r - 1)
  return sum
end


a1 = 2
r = 3
n = 3


puts "Sum of the GP series: #{sum_of_gp(a1, r, n)}"
