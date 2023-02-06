a = int(input())
c = 0
if a == 1:
    print("Not Prime Number")
elif a == 2:
    print("Prime Number")
else:
    for i in range(2, a + 1):
        if a % i == 0:
            c = c + 1
    if c >= 2:
        print("Not Prime Number")
    else:
        print("Prime Number")

# Contributed by Raghav Garg
