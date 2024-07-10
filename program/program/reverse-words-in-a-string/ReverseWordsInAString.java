
class ReverseWordsInAString {

	/**
	 * This program reverses the words in a string<br><br>
	 * 
	 * <b>input:</b> The input String for which the words to be reversed<br><br>
	 * 
	 * <b>Returns a new String</b><br><br>
	 * 
	 * <b>Example:</b><br><br>
	 * input: hello world<br><br>
	 * output: world hello<br><br>
	 * */
	public static String reverseWordsInAString(String input) {
		
		// Check if the string is null or blank
		if (input == null || input.isBlank()) {
			return input;
		}
		
		// Split the string to get the words
		String[] words = input.split(" ");
		
		// Join the string back in reverse order
		StringBuilder result = new StringBuilder();
		for (int i = words.length - 1; i >= 0; --i) {
			result.append(words[i] + " ");
		}
		
		// Return the result
		return result.toString().trim();
	}

	public static void main(String[] args) {
		System.out.println(reverseWordsInAString("Hello World"));
	}

}
