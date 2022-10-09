function splitStringIntoArrayOfCharacters(str: string) {

    // Method 1
    let charArray = str.split('');
    console.log(charArray);
    
    
    // Method 2
    let charArray = [];
    for (let i = 0; i < str.length; i++) {
        charArray.push(str[i]);
    }
    console.log(charArray);
}

splitStringIntoArrayOfCharacters("Hello World")
