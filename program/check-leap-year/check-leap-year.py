# Program to check leap year
def check_leap_year(year):
    """
    Function to check leap year
    :param year:
    :return True if leap year else False::

    >>> 2000
    2000 is a leap year
    >>> 2022
    2022 is not a leap year
    >>> 2020
    2020 is a leap year
    >>> -2000
    Teackback (most recent call last):
    ...
    ValueError: Year cannot be negative
    """

    if year < 0:
        raise ValueError("Year cannot be negative")

    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False


# Taking input from user
year_user = int(input("Enter a year: "))
if check_leap_year(year_user):
    print(year_user, "is a leap year")
else:
    print(year_user, "is not a leap year")
