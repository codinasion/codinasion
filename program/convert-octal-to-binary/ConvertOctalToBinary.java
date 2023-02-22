/**
 * CONTRIBUTOR: JASMIN, RAMON EMMIEL P.
 * COUNTRY: PHILIPPINES
 */

 import java.lang.*;

 public class ConvertOctalToBinary{

    public static String convert(String octal){
        return Integer.toBinaryString(Integer.parseInt(octal, 8));
    }
 }