fn reverse_words(sentence: &str) -> String {
    let words: Vec<&str> = sentence.split_whitespace().collect();
    let reversed_words: Vec<&str> = words.into_iter().rev().collect();
    reversed_words.join(" ")
}

fn main() {
    let sentence = "Hello world this is a test";
    let reversed_sentence = reverse_words(sentence);
    println!("Original sentence: {}", sentence);
    println!("Reversed words: {}", reversed_sentence);
}
