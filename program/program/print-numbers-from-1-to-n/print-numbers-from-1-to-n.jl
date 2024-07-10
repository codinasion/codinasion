print("Enter the value of n: ")
# Using stdin for Julia 1.4 and for Julia 0.6 use STDIN
n = parse(Int, readline(stdin))
for i in 1:n
  println(i)
end