import math


def FindVolumeOfACone(radius: float, height: float) -> float:
    """
    find volume of a cone
    Arguments:
        radius: a float
        height: a float
    Returns:
        The volume of a cone : a float
    """

    return (1 / 3) * math.pi * math.pow(radius, 2) * height


if __name__ == "__main__":
    radius = float(input("Radius: "))
    height = float(input("Height: "))
    print("Volume:", FindVolumeOfACone(radius, height))
