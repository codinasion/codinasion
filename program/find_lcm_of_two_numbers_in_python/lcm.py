# function to calculate the lcm
def compute_lcm(x, y):
   if x > y:
       maxi = x
   else:
       maxi = y

   while(True):
       if((maxi % x == 0) and (maxi % y == 0)):
           lcm = maxi
           break
       maxi += 1
   return lcm

num1 = input("Enter first number: ")
num2 = input("Enter first number: ")

print("The L.C.M. is", compute_lcm(num1, num2))
