def convertHoursToMinutes(hours: float) -> float:
    """
    convert hours to minutes
    Arguments:
        hours:float
    Returns:
        minutes:float
    """

    return hours * 60


if __name__ == "__main__":
    hours = float(input("Type number of hours: "))
    print("Number of minutes is:", convertHoursToMinutes(hours))


# contributed by MedMly20208 Mohamed Moulay
