import java.util.*;

public class FindAverageOfDigitsOfANumber {
    public static double AvgDigit(int n) {
        double count = 0, sum = 0;
        for (int i = n; i > 0; i = i / 10) {
            double mod = i % 10;
            count++;
            sum += mod;
        }
        return sum / count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.close();
        System.out.println(AvgDigit(n));
    }
}

// Contributed by Raghav Garg (@grraghav120)
