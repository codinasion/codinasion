println("Enter a string: ")
sub = split(lowercase(readline()), "")
vowels = SubString{String}["a","e","i","o","u"]
s = ""

for i in sub
  if i in vowels
    global s = s * uppercase(i)
  else
    global s = s * i
  end
end

println("Given string in vowelcase: ", s)