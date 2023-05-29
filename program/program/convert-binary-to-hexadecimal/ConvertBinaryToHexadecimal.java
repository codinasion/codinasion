import java.lang.*;
import java.util.*;
public class ConvertBinaryToHexadecimal{  
    public static void main(String args[]){  
    Scanner sc = new Scanner(System.in);
    String binaryString=sc.nextLine();  
    int decimal=Integer.parseInt(binaryString,2);  
    System.out.println(Integer.toHexString(decimal).toUpperCase());  
    }
}