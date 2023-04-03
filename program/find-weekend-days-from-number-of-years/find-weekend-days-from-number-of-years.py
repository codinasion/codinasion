import datetime

def count_weekend_days(years):
    start_date = datetime.date.today()
    end_date = start_date + datetime.timedelta(days=years*365)

    weekend_days = 0
    for i in range((end_date - start_date).days):
        day = start_date + datetime.timedelta(days=i)
        if day.weekday() >= 5:
            weekend_days += 1

    return weekend_days

years = int(input("Enter number of years: "))
weekend_days = count_weekend_days(years)
print(f"Number of weekend days in {years} years: {weekend_days}")
