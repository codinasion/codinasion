def recursive_sum(n: int) -> int:
    if n != 0:
        return n + recursive_sum(n - 1)
    return 0


print(recursive_sum(int(input())))
