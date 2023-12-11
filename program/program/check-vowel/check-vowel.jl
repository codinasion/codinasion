function vowelOrConsonant(char)
    char = lowercase(char) 
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') println("Vowel"); 
    else
        println("Consonant"); 
    end
end
vowelOrConsonant('a');
