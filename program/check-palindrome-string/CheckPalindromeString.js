function checkPalindromeString(str) {
	const reverseStr = [...str].reverse().join('')
	return str === reverseStr
}

console.log(
	checkPalindromeString('abba') ? 'Palindrome String' : 'Not Palindrome String',
)
