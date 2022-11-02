from math import pi


def findSurfaceAreaOfACone(radius:float, slantHeight:float) -> None:
    """
    find surface Area of A Cone 
    Arguments:
        radius: float
        slantHeight: float
    Returns:
        SurfaceArea: float
    Surface area of cone = π * radius * (radius + slantHeight)
    """

    return pi * radius * (radius + slantHeight)


if __name__ == "__main__":
    Radius = float(input("Type Radius: "))
    slantHeight = float(input("Type slant height: "))


    print(findSurfaceAreaOfACone(Radius,slantHeight))

#contributed by MedMly20208 Mohamed Moulay
