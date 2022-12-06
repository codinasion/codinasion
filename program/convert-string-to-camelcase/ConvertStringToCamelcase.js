function convertStringToCamelCase(str) {
    var splitVal = str.split(" ");
    for (var i = 1; i < splitVal.length; i++) {
        splitVal[i] = splitVal[i].substr(0, 1).toUpperCase() + splitVal[i].substr(1);
    }
    return splitVal.join('');
}

console.log(convertStringToCamelCase('hello world'));
