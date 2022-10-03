
function checkUpperCaseInJS(character: string) {
    /**
     * Better implenetation than converting the character toUpperCase and checking. 
     */
     const isUpperCase = /^[A-Z]*$/.test(character)
     return isUpperCase ? "Upper Case" : "Not Upper Case"
}