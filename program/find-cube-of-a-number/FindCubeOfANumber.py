def cube_of_number(num):
    return (num ** 3)

if __name__ == "__main__":
    num = int(input('Enter the number: '))
    print(f'\nCube of the number: {cube_of_number(num)}')