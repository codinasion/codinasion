def jump_search(arr, x)
  n = arr.size
  block_size = Math.sqrt(n).to_i

  prev = 0
  while arr[[block_size, n].min - 1] < x
    prev = block_size
    block_size += Math.sqrt(n).to_i
    return -1 if prev >= n
  end

  while arr[prev] < x
    prev += 1
    return -1 if prev == [block_size, n].min
  end

  return prev if arr[prev] == x

  -1
end

# Example usage
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
x = 7
result = jump_search(arr, x)

if result != -1
  puts "Element found at index #{result}"
else
  puts "Element not found in the array"
end
