def checkAnagram str1, str2
    if str1.reverse == str2
        "Anagram Strings"
    else
        "Not Anagram Strings"
    end
end

puts checkAnagram "pan", "nap"
