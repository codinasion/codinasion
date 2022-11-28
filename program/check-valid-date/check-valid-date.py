from datetime import date

try:
    year, month, day = tuple(map(int, input().split("-")))
    date(year=year, month=month, day=day)
except ValueError:
    print("False")
else:
    print("True")
