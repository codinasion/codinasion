def convertStringToConsonantCase string
    vowels = ['a','e','i','o','u']

    newstr = []
    string.split("").each do |letter|
        vowels.include?(letter) ? newstr << letter.downcase : newstr << letter.upcase
    end

    puts newstr.join("")
end

convertStringToConsonantCase "hello world"