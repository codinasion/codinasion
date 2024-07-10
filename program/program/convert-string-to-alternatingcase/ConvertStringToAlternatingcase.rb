def stringAlternateCase string
    newstr = []
    string.split("").each_with_index do |word, i|
        i.even? ? newstr << word.downcase : newstr << word.upcase
    end
    puts newstr.join("")
end

stringAlternateCase "hello world"