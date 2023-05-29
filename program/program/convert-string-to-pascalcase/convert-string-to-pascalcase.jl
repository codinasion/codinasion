println("Enter a string: ")
sub = split(readline(), " ")
s = ""

for i in sub
 global s = s * titlecase(i)
end

println("Given string in pascalcase: ", s)