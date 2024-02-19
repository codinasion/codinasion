input = [12, 13, 1, 10, 34, 1];
if input.length() <= 1
  print "Array should contain atleast 2 elements"
else
  sort = input.sort.reverse
  result = "#{sort[0].to_i},#{sort[1].to_i}"
  print result
end
