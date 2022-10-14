start = int(input())
stop = int(input())
for val in range(start, stop):
  if val > 1:
    for i in range(2, val):
      if (val % i) == 0:
        break
    else:
      print(val, end=" ")