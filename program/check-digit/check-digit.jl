print("Enter a number : ")
num = readline(stdin)
if tryparse(Float64, num) !== nothing
    println("Digit")
else
    println("Not a Digit")
end
