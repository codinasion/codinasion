using Dates

# Function to convert standard date format to Julian date
function standard_to_julian(date_str::String)
    date = Date(date_str)
    year = year(date) % 100  # Last two digits of the year
    day_of_year = Dates.dayofyear(date)
    return "$(year)-$(lpad(day_of_year, 3, '0'))"
end

# Function to convert Julian date to standard date format
function julian_to_standard(julian_date::String)
    year = parse(Int, julian_date[1:2]) + 2000  # Convert to full year
    day_of_year = parse(Int, julian_date[4:end])
    date = Date(year, day_of_year)
    return string(date)
end

# Test
standard_date = "2024-03-27"
julian_date = standard_to_julian(standard_date)
println("Julian date for $(standard_date): $(julian_date)")

converted_standard_date = julian_to_standard(julian_date)
println("Standard date for $(julian_date): $(converted_standard_date)")
