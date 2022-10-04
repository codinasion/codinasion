import java.lang.*;
import java.util.*;
public class ConvertBinaryToHexadecimal{  
    public static void main(String args[]){  
    Scanner scn = new Scanner(System.in);
    String binaryString=scn.nextLine();  
    int decimal=Integer.parseInt(binaryString,2);  
    System.out.println(Integer.toHexString(decimal).toUpperCase());  
    }
}