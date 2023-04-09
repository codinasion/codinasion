/**
 * CONTRIBUTOR: JASMIN, RAMON EMMIEL P.
 * COUNTRY: PHILIPPINES
 * DATE: FEBRUARY 13, 2022
 */

public class PrintReverseOfAStringByRecursion {
    public static void main(String[] args) {
        String orig = "abcd";

        System.out.println("ORIGINAL STRING: " + orig);
        System.out.println("REVERSED STRING: " + reverseString(orig));
    }
    public static String reverseString(String str){
        if (str.isEmpty()){
            return str;
        }
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}
