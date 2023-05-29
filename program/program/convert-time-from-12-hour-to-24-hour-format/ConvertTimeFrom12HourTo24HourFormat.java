import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.util.Date;

public class convert_time_from_12_hour_to_24_hour_format {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter hours:(hh:mm:ssaa) ");
        String input = sc.next();
        String[] time = input.split(":");
        sc.close();
        String twelveHoursTime = "";
        try {
            switch(time.length) {
                case 1:
                    twelveHoursTime = time[0].substring(0, time[0].length()-2)+":00:00"+time[0].substring(time[0].length()-2, time[0].length());
                    break;
                case 2: 
                    twelveHoursTime = time[0]+":"+time[1].substring(0, time[1].length()-2)+":00"+time[1].substring(time[1].length()-2, time[1].length());
                    break;
                default: 
                    twelveHoursTime = input;
                    break;
            }
            SimpleDateFormat df = new SimpleDateFormat("hh:mm:ssaa");
            Date date = df.parse(twelveHoursTime);
            System.out.println("Output : " + new SimpleDateFormat("HH:mm:ss").format(date));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}