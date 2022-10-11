// Javascript code to convert a string to title case 

function toTitleCase(str) {
    // split the string into an array of words
    strList = str.split(" ");
    // loop through the array of words and capitalize the first letter of each word
    return strList.map(function(word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
    // join the array of words back into a string and return it
}
console.log(toTitleCase("I'm a little tea pot"));
