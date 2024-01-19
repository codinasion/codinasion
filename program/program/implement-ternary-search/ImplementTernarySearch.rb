def ternary_search(array, value)
    left = 0
    right = array.length - 1
  
    while left <= right
      partition_size = (right - left) / 3
      mid1 = left + partition_size
      mid2 = right - partition_size
  
      return mid1 if array[mid1] == value
      return mid2 if array[mid2] == value
  
      if value < array[mid1]
        right = mid1 - 1
      elsif value > array[mid2]
        left = mid2 + 1
      else
        left = mid1 + 1
        right = mid2 - 1
      end
    end
  
    return -1
  end
  
  # Example
  list = [1, 2, 3, 4, 5]
  value = 4
  result = ternary_search(list, value)
  
  if result != -1
    puts "Element #{value} found at index #{result}"
  else
    puts "Element #{value} not found in the array"
  end
  