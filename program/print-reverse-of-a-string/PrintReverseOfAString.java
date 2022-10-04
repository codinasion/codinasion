public class PrintReverseOfAString {
    public static void main(String[] args) {

        String input = "abcd";
        String result = "";
        char ch;

        for (int i = 0; i < input.length(); i++) {
            ch = input.charAt(i);
            result = ch + result;
        }

        System.out.println(result);

    }
}