module Subarray

  def self.max_sub(arr)
    
    max_so_far = arr.first
    max_ending_here = 0
    start = 0
    stop = 0
    playhead = 0
    
    arr.each_with_index do |el, i|

      max_ending_here += el
      if max_so_far < max_ending_here
        max_so_far = max_ending_here 
        start = playhead
        stop = i
      end

      if max_ending_here < 0
        max_ending_here = 0 
        playhead = i+1
      end

    end

    sub_arr_length = stop - start + 1
    sub_arr = arr[start, sub_arr_length]
    return max_so_far, sub_arr.to_s

  end
  
end

arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
puts Subarray.max_sub(arr)
# => 6
# => [4, -1, 2, 1]