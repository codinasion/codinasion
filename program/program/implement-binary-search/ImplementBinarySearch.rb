def binary_search(arr, x)
  lower_bound = 0
  upper_bound = arr.length - 1

  while lower_bound <= upper_bound
    mid_point = lower_bound + (upper_bound - lower_bound) / 2

    if arr[mid_point] < x
      lower_bound = mid_point + 1
    elsif arr[mid_point] > x
      upper_bound = mid_point - 1
    else
      return mid_point # x found at mid_point
    end
  end

  return -1 # x does not exist
end

# Example usage
arr = [2, 3, 4, 10, 40]
x = 10

result = binary_search(arr, x)
if result != -1
  puts "Element #{x} is present at index #{result}"
else
  puts "Element #{x} is not present in array"
end
