import java.util.*;

public class ConvertHoursToSeconds {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int hours = sc.nextInt();
        long seconds = hours * 60 * 60;
        System.out.println(seconds);
        sc.close();
    }
}