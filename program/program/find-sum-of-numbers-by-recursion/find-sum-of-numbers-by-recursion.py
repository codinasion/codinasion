from typing import List


def recursive_sum(numbers: List[int]) -> int:
    if len(numbers) != 0:
        return numbers[-1] + recursive_sum(numbers[:-1])
    return 0


print(recursive_sum([1, 2, 3, 4, 5]))  # Output: 15
