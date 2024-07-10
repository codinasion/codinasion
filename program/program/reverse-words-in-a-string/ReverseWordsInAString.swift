import Foundation

func reverseWords(in sentence: String) -> String {
    // Split the sentence into an array of words
    let words = sentence.split(separator: " ")
    
    // Reverse the array of words
    let reversedWords = words.reversed()
    
    // Join the reversed words back into a single string
    let reversedSentence = reversedWords.joined(separator: " ")
    
    return reversedSentence
}

func main() {
    let sentence = "Hello world this is a test"
    let reversedSentence = reverseWords(in: sentence)
    print("Original sentence: \(sentence)")
    print("Reversed words: \(reversedSentence)")
}

main()
