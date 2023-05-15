function is_leap_year(year::Int)
    return (year % 4 == 0) && !((year % 100 == 0) && (year % 400 != 0))
end

println(is_leap_year(2016))
