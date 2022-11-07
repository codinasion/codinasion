def convert_day_to_hour(day):
    return day * 24

if __name__ == '__main__':
    day = int(input("Enter day : "))
    print("Hours : {}".format(convert_day_to_hour(day)))