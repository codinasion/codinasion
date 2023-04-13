function count_weekend_days(years::Int)
    total_weeks = years * 52
    total_weekend_days = total_weeks * 2
    num_sundays = Int(floor(years / 4))  # accounting for leap years
    num_weekend_days = total_weekend_days - num_sundays
    return num_weekend_days
end
num_years = readline()
num_years = parse(Int64, num_years)
weekend_days = count_weekend_days(num_years)
println("There are $(weekend_days) weekend days in $(num_years) years.")

#The function count_weekend_days takes an integer input years that represents the number of years for which we want to calculate the number of weekend days. It calculates the total number of weeks in those years by multiplying the number of years by 52 (assuming 52 weeks in a year). It then multiplies this by 2 to get the total number of weekend days.

#To account for leap years, the function calculates the number of Sundays that occurred during those years. We can do this by dividing the number of years by 4 and taking the floor of the result, since there is an extra day (February 29th) in a leap year.