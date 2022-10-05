checkVowel = function(char){
    if(char %in% c('a', 'e', 'i', 'o', 'u'))
        print("Vowel")
    else 
        print("Consonant")
}

checkVowel('a')
# Output
# Vowel