def find_len(n):
    l = [input(f"Element {i + 1}: ") for i in range(n)]
    l.sort()
    print("\nSecond smallest element is:", l[1])


size_list = int(input("What's the size of the list: "))
find_len(size_list)
