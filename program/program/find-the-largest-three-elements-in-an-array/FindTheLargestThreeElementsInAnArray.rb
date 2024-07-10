input = [12, 13, 1, 10, 34, 1];
if input.length() <= 2
  print "Array should contain atleast 3 elements"
else
  sort = input.sort.reverse
  result = "#{sort[0].to_i},#{sort[1].to_i},#{sort[2].to_i}"
  print result
end