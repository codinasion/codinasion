input = [10, 4, 3, 50, 23, 90];
if input.length() < 2
  print "Array should contain atleast 3 elements"
else
  sort = input.sort
  result = "#{sort[0].to_i},#{sort[1].to_i},#{sort[2].to_i}"
  print result
end
