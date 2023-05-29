println("Enter s string: ")
sub = split(lowercase(readline()), " ")
n = length(sub)
s = titlecase(sub[1])

for i in 2:n
  global s = s * " " * sub[i]
end

println("Given string in sentencecase: ", s)