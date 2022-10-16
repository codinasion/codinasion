import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class IntOrFloat {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String number = br.readLine();
        boolean isInt = false;
        boolean isFloat = false;
        try {
            Integer.parseInt(number);
            isInt = true;
        } catch (NumberFormatException ignored) {

        }

        try {
            Float.parseFloat(number);
            isFloat = true;
        } catch (NumberFormatException ignored) {

        }

        if (isInt) {
            System.out.println("Integer");
        } else if (isFloat) {
            System.out.println("Float");
        } else {
            System.out.println("Neither Integer nor Float");
        }

    }
}
