import java.util.*;
public class FindAreaofACube{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int side=sc.nextInt();
        int area=6*side*side;
        System.out.println("Area of the cube: " + area);
    }
}