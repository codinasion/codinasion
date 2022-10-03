import java.util.*;
public class ConvertOctalToHexadecimal {
  public static int octToDec(int n)
    {
        int result = 0,temp=0;double p=0.0;
        for (int i = 0; n > 0; i++) {
            temp = n % 10;
            p = Math.pow(8, i);
            result += (temp * p);
            n = n / 10;
        }
        return result;
    }
  public static String decTohex(int n)
    {
        int[] hexNum = new int[100];
        int i = 0;
        String result="";
        while (n != 0) {
            hexNum[i] = n % 16;
            n = n / 16;
            i++;
        }
        for (int j = i - 1; j >= 0; j--) {
            if (hexNum[j] > 9)
                result+=(char)(55 + hexNum[j]);
            else
                result+=hexNum[j];
        }
        return result;
    }
  public static void main(String args[]) 
   {
      Scanner sc=new Scanner(System.in);
      System.out.println("Enter octal number");
      int n=sc.nextInt();
      System.out.println(decTohex(octToDec(n)));
   }
}
