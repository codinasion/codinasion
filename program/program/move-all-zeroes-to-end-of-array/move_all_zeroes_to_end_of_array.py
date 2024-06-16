def zeroes_to_end(arr: list) -> list:
    result = [x for x in arr if x != 0] + [x for x in arr if x == 0]
    return result


if __name__ == "__main__":
    arr = [1, 2, 0, 4, 3, 0, 5, 0]
    print(zeroes_to_end(arr))
