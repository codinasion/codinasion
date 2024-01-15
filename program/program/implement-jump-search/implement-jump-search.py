import math


def jump_search(arr, x, n):
    block_size = math.sqrt(n)

    while arr[int(min(block_size, n) - 1)] < x:
        prev = block_size
        block_size += math.sqrt(n)
        if prev >= n:
            return -1

    while arr[int(prev)] < x:
        prev += 1

        if prev == min(block_size, n):
            return -1

    if arr[int(prev)] == x:
        return int(prev)

    return -1


if __name__ == '__main__':
    list = [1, 2, 3, 4, 5]
    value = 4
    n = len(list)
    print(jump_search(list, value, n))
