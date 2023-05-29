#Importing Complex math module
import cmath

print("Enter the quadratic equation in the format: ax^2+bx+c")

a=int(input("Enter a"))
b=int(input("Enter b"))
c=int(input("Enter c"))

#Evaluating the discriminant using formula: d= b^2-4ac
d = (b**2)-(4*a*c)

#Finding the roots of equation using formula: (-b-(d)^1/2)/4a and (-b+(d)^1/2)/4a
root1 = (-b-cmath.sqrt(d))/(2*a)
root2 = (-b+cmath.sqrt(d))/(2*a)

print('The roots of quadratic equations are: ',root1, root2)