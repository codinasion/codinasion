def find_volume_of_a_cuboid(length, width, height):
    return length * width * height


if __name__ == "__main__":
    length = 2
    width = 3
    height = 4
    print("Length : ", length)
    print("Width  : ", width)
    print("Height : ", height)
    print("\nVolume : ", find_volume_of_a_cuboid(length, width, height))
