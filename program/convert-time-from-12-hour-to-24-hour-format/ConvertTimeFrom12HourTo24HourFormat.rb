def convertTimeTo24Hours(string) 
    splitTime = string.split(":")
    ampm = splitTime.last.gsub(/[^a-zA-Z]/, "")
    hour = splitTime.first.to_i

    ampm == "PM" ? 
        if hour == 12 
            newHour = hour
        elsif hour < 12
            newHour = hour + 12
        end
     : 
        if (hour == 12) 
            newHour = 0
        else 
            newHour = hour
        end

    newHour.to_s + ":#{splitTime[1]}" + ":#{splitTime[2].gsub(/[^0-9]/, "")}" 

end

puts convertTimeTo24Hours("12:05:45PM")