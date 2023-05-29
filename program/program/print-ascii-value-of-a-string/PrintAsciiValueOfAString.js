function PrintAsciiValueOfAString(s) {
    let ascii = "";
    for(let c of s)
        ascii += c.charCodeAt(0) + " ";
    return ascii;
}
let s = "ABC;
console.log('Input  :', s);
console.log('Output :', PrintAsciiValueOfAString(s));
