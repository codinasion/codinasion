import java.util.Scanner;

public class NumberToWords {

    private static final String[] units = { "", "one", "two", "three", "four",
            "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
            "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
            "eighteen", "nineteen" };

    private static final String[] tens = { "", "", "twenty", "thirty", "forty",
            "fifty", "sixty", "seventy", "eighty", "ninety" };

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        long number = scanner.nextLong();
        System.out.println(convertToWords(number));
        scanner.close();
    }

    private static String convertToWords(long number) {
        if (number == 0) {
            return "zero";
        }

        String words = "";

        if ((number / 10000000) > 0) {
            words += convertToWords(number / 10000000) + " crore ";
            number %= 10000000;
        }

        if ((number / 100000) > 0) {
            words += convertToWords(number / 100000) + " lakh ";
            number %= 100000;
        }

        if ((number / 1000) > 0) {
            words += convertToWords(number / 1000) + " thousand ";
            number %= 1000;
        }

        if ((number / 100) > 0) {
            words += convertToWords(number / 100) + " hundred ";
            number %= 100;
        }

        if (number > 0) {
            if (number < 20) {
                words += units[(int) number];
            } else {
                words += tens[(int) (number / 10)];
                if ((number % 10) > 0) {
                    words += "-" + units[(int) (number % 10)];
                }
            }
        }

        return words;
    }
}
