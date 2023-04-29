
const checkPalindromeString = (text: string) => {
    text = text.toLowerCase();
    const n = text.length;
    let low = 0;
    let high = n - 1;

    while (high > low) {
        if (text[high] != text[low]) {
            return false;
        }
        low++;
        high--;
    }
    return true;
};

/**
 * Test Case 1:
 * text = "abba"
 */

const string = "abba";
if (checkPalindromeString(string)) {
    console.log("Palindrome String");
} else {
    console.log("Not a Palindrome String");
}