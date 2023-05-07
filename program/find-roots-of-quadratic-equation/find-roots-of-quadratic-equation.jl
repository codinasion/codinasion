function find_roots(a,b,c)              #Define a function to find roots of quadratic equation
    det = b^2 - 4*a*c                   #Calculate discriminant

    if det >= 0                         #real roots
        root1 = (-b + sqrt(det))/(2*a)
        root2 = (-b - sqrt(det))/(2*a)
        println("Real roots: $root1, $root2")
    
    else                                #imaginary roots
        real_part = -b/(2*a)
        imag_part = sqrt(-det)/(2*a)
        println("Complex roots: $real_part+$imag_part i, $real_part - $imag_part i")
    end
end

#Take user input:
println("Format of quadratic equation: b^2-4*a*c")

println("Enter the value of a: ")
a_f = readline()
a = parse(Float64, a_f)

println("Enter the value of b: ")
b_f = readline()
b = parse(Float64, b_f)

println("Enter the value of c: ")
c_f = readline()
c = parse(Float64, c_f)

find_roots(a,b,c)

