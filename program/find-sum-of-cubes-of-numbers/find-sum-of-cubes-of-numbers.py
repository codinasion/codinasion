from functools import reduce

print(
    "Sum of cubes:",
    reduce(
        lambda x, y: x + y**3,
        [int(input()) for _ in range(int(input("How many numbers: ")))],
    ),
)
