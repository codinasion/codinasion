
def reverse(s):
    if len(s) == 0:
        return s
    else:
        return reverse(s[1:]) + s[0]

s = str(input("Enter the string to be reversed: "))
print(reverse(s))