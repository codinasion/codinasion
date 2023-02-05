function split_string(text::String)
    words = split(text)
    return words
end

text = "Hello World"
words = split_string(text)
println(words)

