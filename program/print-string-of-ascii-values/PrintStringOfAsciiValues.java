import java.util.*;
import java.lang.*;

public class PrintStringOfAsciiValues {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String[] input = sc.nextLine().split(" ");

        for (String ascii : input) {
            System.out.printf("%c", '\0' + Integer.parseInt(ascii));
        }
    }
}