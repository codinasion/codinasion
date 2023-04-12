import java.util.Scanner;

public class PrintNumberToWords {
    private static final String[] ONES = {"", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"};
    private static final String[] TEENS = {"ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"};
    private static final String[] TENS = {"", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        System.out.println(numberToWords(num));
    }

    public static String numberToWords(int num) {
        if (num == 0) {
            return "zero";
        }
        if (num < 0) {
            return "minus " + numberToWords(-num);
        }

        String words = "";

        if ((num / 1000000) > 0) {
            words += numberToWords(num / 1000000) + " million ";
            num %= 1000000;
        }

        if ((num / 1000) > 0) {
            words += numberToWords(num / 1000) + " thousand ";
            num %= 1000;
        }

        if ((num / 100) > 0) {
            words += numberToWords(num / 100) + " hundred ";
            num %= 100;
        }

        if (num > 0) {
            if (num < 10) {
                words += ONES[num];
            } else if (num < 20) {
                words += TEENS[num - 10];
            } else {
                words += TENS[num / 10];
                if ((num % 10) > 0) {
                    words += " " + ONES[num % 10];
                }
            }
        }

        return words;
    }
}
