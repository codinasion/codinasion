function reverse_words(sentence::String)
    words = split(sentence)
    reversed_words = reverse(words)
    return join(reversed_words, " ")
end

function main()
    sentence = "Hello world this is a test"
    reversed_sentence = reverse_words(sentence)
    println("Original sentence: $sentence")
    println("Reversed words: $reversed_sentence")
end

main()
