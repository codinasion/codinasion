checkVowel = function(char){
    if(char %in% c('a', 'e', 'i', 'o', 'u','A','E','I','O','U'))
        print("Vowel")
    else 
        print("Consonant")
}

checkVowel('a')
# Output
# Vowel

checkVowel('E')
# Output
# Vowel
