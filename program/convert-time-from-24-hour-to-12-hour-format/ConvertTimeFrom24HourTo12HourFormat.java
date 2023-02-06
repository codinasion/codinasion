import java.util.Scanner;
import java.text.SimpleDateFormat;
import java.util.Date;

public class convert_time_from_24_hour_to_12_hour_format {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter hours: ");
        String input = sc.next();
        String[] time = input.split(":");
        sc.close();
        String twentyFourHoursTime = "";
        try {
            switch(time.length) {
                case 1: 
                    twentyFourHoursTime = time[0]+":00:00";
                    break;
                case 2: 
                    twentyFourHoursTime = time[0]+":"+time[1]+":00";
                    break;
                default: 
                    twentyFourHoursTime = input;
                    break;
            }
            SimpleDateFormat df = new SimpleDateFormat("HH:mm:ss");
            Date date = df.parse(twentyFourHoursTime);
            System.out.println("Output : " + new SimpleDateFormat("hh:mm:ssaa").format(date));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
