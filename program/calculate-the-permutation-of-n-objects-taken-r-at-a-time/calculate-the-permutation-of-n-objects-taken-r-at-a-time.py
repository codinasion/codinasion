def factorial(num: int) -> int:
    if (num == 0):
        return 1
    else:
        return num * factorial(num - 1)


def permutations(total: int, sample: int) -> int:
    if total > sample:
        return factorial(total)/factorial(total - sample)
    else:
        raise ValueError(
            f"ERROR: supplied total > sample; permutations(total={total}, sample={sample})"
        )


print(permutations(5, 2))
