import java.util.*;
class convert_feet_to_centimeters
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter feet: ");
        double ft = sc.nextDouble();
        System.out.println(ft + " feet = " + ft*30.48 + " cm");
    }
}