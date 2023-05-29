public class ConvertStringToConsonantcase {
    public static void main(String[] args) {
        String str = "Convert me to Consonant Case";
        String result = convertToConsonantCase(str);
        System.out.println(result); // Output: cOnvErt mE tO cOnsOnAnt cAsE
    }

    public static boolean isVowel(char c) {
        return "AEIOUaeiou".indexOf(c) != -1;
    }

    public static String convertToConsonantCase(String str) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);
            if (isVowel(c)) {
                result.append(Character.toUpperCase(c));
            } else {
                result.append(Character.toLowerCase(c));
            }
        }
        return result.toString();
    }
}
