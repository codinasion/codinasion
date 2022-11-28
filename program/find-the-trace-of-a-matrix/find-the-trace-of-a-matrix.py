arr = []

try:
    while True:
        arr.append(list(map(int, input().split())))
except:
    pass

sm = 0

for i in range(len(arr)) :
    sm += arr[i][i]
    
print(sm)
