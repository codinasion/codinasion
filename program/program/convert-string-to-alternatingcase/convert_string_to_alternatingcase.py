input = input("Enter a String : ")
res = ""
for idx in range(len(input)):
    if not idx % 2:
        res = res + input[idx].lower()
    else:
        res = res + input[idx].upper()

print("The alternate case string : " + str(res))
