println("Enter s string: ")
str = readline()
reversed = ""
for c in str 
  if islowercase(c)
    global reversed *= uppercase(c)
  elseif isuppercase(c)
    global reversed *= lowercase(c)
  else
    global reversed *= c
  end
end

println("Given string in reversecase: ", reversed)