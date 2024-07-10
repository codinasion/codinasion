import java.util.Arrays;
import java.util.Calendar;
import java.util.Scanner;

public class ConvertStandardDateFormatToJulianDateAndViceversa {
    public static void main(String[] args) {
        String ans = "";

        Scanner in = new Scanner(System.in);
        String date = in.next();
        if (date.contains("-")) {
            ans = DateFormatToJulianDate(date);
            System.out.println("Julian Date: " + ans);
        } else {
            ans = JulianDateToDateFormat(date);
            System.out.println("Standard Date: " + ans);
        }

    }

    // Function to convert the Date format to Julian Date format
    static String DateFormatToJulianDate(String date) {
        // Input Format : year - month - day
        // Output Format : year + noOfDays
        // ----------------------------------
        String[] dateSplit = date.split("-"); // Split year, month, date using regex

        String ans = dateSplit[0];

        int currentYear = Integer.parseInt(dateSplit[0]);
        int currentMonth = Integer.parseInt(dateSplit[1]);
        int currentDate = Integer.parseInt(dateSplit[2]);

        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, currentYear);

        int totalDays = currentDate;
        for (int i = 0; i < currentMonth - 1; i++) {
            calendar.set(Calendar.MONTH, i);
            int days = calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
            // System.out.println(days);
            totalDays += days;
        }

        if (totalDays > 100) {
            ans += String.valueOf(totalDays);
        } else {
            String formated = String.format("%03d", totalDays);
            ans += formated;
        }

        return ans;
    }

    // Function to convert the Julian date to Date format
    static String JulianDateToDateFormat(String date) {
        // Input Format : yeardayValue
        // Output Format : year - month - date
        // ----------------------------------
        String ans = "";

        int dateInt = Integer.parseInt(date);

        int dayValue = dateInt % 1000;
        int year = dateInt / 1000;
        // System.out.println(year);

        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, year);
        calendar.set(Calendar.DAY_OF_YEAR, dayValue);

        int month = calendar.get(Calendar.MONTH) + 1;
        int day = calendar.get(Calendar.DAY_OF_MONTH);

        ans = year + "-" + month + "-" + day; // Formating the answer to `year - month - date`

        return ans;
    }
}
