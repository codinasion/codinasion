/**
 * CONTRIBUTOR: JASMIN, RAMON EMMIEL P.
 * COUNTRY: PHILIPPINES
 * DATE: FEBRUARY 13, 2022
 */

public class ConvertHexadecimalToDecimal{
    public static void main(String[] args) {
        String hexadecimal = "A";
        System.out.println("HEXADECIMAL: " + hexadecimal);
        System.out.println("DECIMAL EQUIVALENT: " + convertHexaToDeci(hexadecimal));
    }
    public static String convertHexaToDeci(String hexaValue){
        return Integer.toString(Integer.parseInt(hexaValue, 16));
    }
}