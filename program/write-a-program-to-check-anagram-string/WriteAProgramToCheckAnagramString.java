import java.util.*;


class WriteAProgramToCheckAnagramString{
	public static void main(String[] args){
		// Inputs
		String s1 = "pan";
		String s2 = "nap";

		//Check anagrams
		if(isAnagram(s1,s2)){
			System.out.println("Anagram Strings");
		}else{
			System.out.println("Not Anagram Strings");

		}


}
	public static boolean isAnagram(String str1, String str2) {

		// Convert strings to lowercase for case sensitive strings
		String lowerStr1 = str1.toLowerCase();
		String lowerStr2 = str2.toLowerCase();

		// Convert strings to character arrays
		char[] arr1 = lowerStr1.toCharArray();
		char[] arr2 = lowerStr2.toCharArray();

		// Sort character arrays
		Arrays.sort(arr1);
		Arrays.sort(arr2);

		// Compare sorted character arrays
		return Arrays.equals(arr1, arr2);
	}

}