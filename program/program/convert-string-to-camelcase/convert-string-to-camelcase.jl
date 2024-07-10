println("Enter a string: ")
sub = split(readline(), " ")
n = length(sub)
s = sub[1]

for i in 2:n
 global s = s * titlecase(sub[i])
end

println("Given string in camelcase: ", s)