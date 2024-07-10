fun consonantCase() {
    val sentence = "Hello, world!"
    var upperCaseConsonants = ""

    for(i in 0..sentence.length-1){
        if(sentence[i] == 'a' || sentence[i] == 'e' || sentence[i] == 'i' || sentence[i] == 'o' || sentence[i] == 'u'){
            upperCaseConsonants += sentence[i]
            continue
        }else{
            upperCaseConsonants += sentence[i].toUpperCase()
        }
    }
    println( "Normal: "+ "$sentence" + "\n" + "Converted:" +"$upperCaseConsonants")
}

consonantCase()