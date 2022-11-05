secsToMins = 1 / 60
minsToHrs = 1 / 60
hrsToDays = 1 / 24
daysToWeeks = 1 / 7

def convertSecondsToWeeks(seconds):
    secsToWeeks = seconds * secsToMins * minsToHrs * hrsToDays * daysToWeeks;
    return secsToWeeks


print(convertSecondsToWeeks(3024000))