lst = list(map(int, input().split(" ")))
sum = 0
n=len(lst)
for i in range(0, n):
    sum = sum + lst[i]
print(sum / n)
