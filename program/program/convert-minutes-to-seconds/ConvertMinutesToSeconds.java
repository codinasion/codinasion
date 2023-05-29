import java.util.Scanner;
class minutesToSeconds
{
	int sec;
	void seconds(int m)
	{
	  sec=m*60;
	}
	public static void main(String[] arg)
	{
	int min;
	Scanner sc=new Scanner(System.in);
	System.out.println("Enter Minutes");
	min=sc.nextInt();
	minutesToSeconds res=new minutesToSeconds();
	res.seconds(min);	
	System.out.println("Seconds: "+res.sec);
	}
}
