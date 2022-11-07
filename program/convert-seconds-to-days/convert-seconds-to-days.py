def seconds_to_days(seconds) :
    return (seconds//86400)

if __name__ == "__main__" :
    seconds = int(input())
    print(seconds_to_days(seconds))
