import java.util.*;
class SurfaceAreaOfACone {
    public static void main(String[] args) {
     Scanner sc = new Scanner(System.in);
     System.out.println("Enter radius of the cone");
     Double radius = sc.nextDouble();
      System.out.println("Enter slant height of the cone");
     Double slantHeight = sc.nextDouble();
Double area = Math.PI*radius*(radius + slantHeight);
 System.out.println("Area of a cone is "+area);    
    }
}
