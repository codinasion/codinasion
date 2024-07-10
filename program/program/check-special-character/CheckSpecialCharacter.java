import java.util.*;

public class SpecialChar {

    public static void main(String[] args) {

        String specialCharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}";

        System.out.println("Enter the Character : ");
        Scanner scanner = new Scanner(System.in);

        char c = scanner.next().charAt(0);
        if (specialCharacters.contains(Character.toString(c))) {

            System.out.println("Special character");
        } else {
            System.out.println("Not a Special character");

        }

    }

}
