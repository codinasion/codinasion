import java.util.Scanner;

public class findareaofacuboid {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Length : ");
        int len = input.nextInt();
        System.out.print("Width : ");
        int wid = input.nextInt();
        System.out.print("Height : ");
        int ht = input.nextInt();
        System.out.println();
        System.out.print("Area : ");
        int area = 2*(len*wid+wid*ht+ht*len);
        System.out.println(area);
    }
}
