function is_anagram(str1::String, str2::String)
    # Remove any spaces and convert both strings to lowercase
    str1 = replace(lowercase(str1), r"\s+" => "")
    str2 = replace(lowercase(str2), r"\s+" => "")

    # Check if the length of both strings is the same
    if length(str1) != length(str2)
        return false
    end

    # Sort the characters in both strings and check if they are equal
    if sort(collect(str1)) == sort(collect(str2))
        return true
    else
        return false
    end
end

# Example usage
println("Enter 2 Strings") #take input
str1 = readline()
str2 = readline()

if is_anagram(str1, str2)
    println("Anagram Strings")
else
    println("Not Anagram Strings")
end