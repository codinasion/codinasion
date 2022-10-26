import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.util.Date;

public class convert_time_from_12_hour_to_24_hour_format {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter hours: ");
        String twelveHoursTime = sc.next();
        sc.close();
        System.out.println("Input  : " + twelveHoursTime);
        SimpleDateFormat df = new SimpleDateFormat("hh:mm:ssaa");
        try {
            Date date = df.parse(twelveHoursTime);
            System.out.println("Output : " + new SimpleDateFormat("HH:mm:ss").format(date));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}