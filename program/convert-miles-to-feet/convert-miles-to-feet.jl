function miles_to_feet(miles::Float64)
    feet = miles * 5280
    return feet
end

# Example usage
miles = 5
feet = miles_to_feet(miles)
println("$miles miles = $feet feet")
