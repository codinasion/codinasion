n = int(input())
triangle = [[1], [1, 1], [1, 2, 1]]
for i in range(4, n + 1):
    line = [1]
    for j in range(i - 2):
        line.append(triangle[i - 2][j] + triangle[i - 2][j + 1])
    line.append(1)
    triangle.append(line)

for line in triangle[:n]:
    print("")
    for number in line:
        print(number, end=" ")
