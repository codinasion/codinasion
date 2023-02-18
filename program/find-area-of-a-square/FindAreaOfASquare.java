import java.util.*;

class area_of_a_square 
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter length of the side of square: ");
        int side = sc.nextInt();
        System.out.println("Area of the square with side " + side + " : " + side*side);
    }
}