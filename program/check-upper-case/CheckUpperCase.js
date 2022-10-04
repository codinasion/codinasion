/**
 * 
 * @param {string} character 
 * @returns {boolean} whether `character` is uppercase or nott
 */
function checkUpperCase(character) {
    /**
     * Better implenetation than converting the character toUpperCase and checking. 
     */
    const isUpperCase = /^[A-Z]*$/.test(character)
    return isUpperCase ? "Upper Case" : "Not Upper Case"
}
