function print_numbers_recursive(current, n)
  if n<1
    println(-1)
    return
  end
  
  if current > n
      return
  end
  println(current)
  print_numbers_recursive(current + 1, n)
end

# passing parameters to the recursive function
n = 10
print_numbers_recursive(1, n)
