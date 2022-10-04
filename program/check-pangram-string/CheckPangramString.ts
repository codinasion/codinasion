/**
 * 
 * @param {string} string - the string to be checked
 * @returns {string} if the string is Pangram or not
 */

const checkPangramString = (string: string) => {
    string = string.toLowerCase();

    let len: number = string.length;
    const alphabets: string = "abcdefghijklmnopqrstuvwxyz";
    const aplhabetsArray: string[] = alphabets.split("");

    for (let i: number = 0; i < len; i++) {
        const elem = string[i];
        const index = aplhabetsArray.indexOf(elem);

        if (index !== -1) {
            aplhabetsArray.splice(index, 1);
        }
    }

    if (!aplhabetsArray.length === true) {
        return "Pangram sentence";
    } else {
        return "Not a pangram sentence";
    };
};

// Test Case
console.log(checkPangramString("The quick brown fox jumps over the lazy dog"));
// Returns Pangram sentence