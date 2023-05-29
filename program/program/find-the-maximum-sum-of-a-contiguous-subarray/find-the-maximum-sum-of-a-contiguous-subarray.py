arr = list(map(int, input().split()))

sm = 0
mx = 0

for i in range(len(arr)):
    sm = max(sm + arr[i], arr[i])
    mx = max(mx, sm)

print(mx)
