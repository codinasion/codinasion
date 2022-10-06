num = int(input("Input  : "))
sum = 0
temp = num
while temp > 0:
   digit = temp % 10
   sum += digit ** 3
   temp //= 10
if num == sum:
   print("Output : Armstrong Number")
else:
   print("Output : Non Armstrong Number")