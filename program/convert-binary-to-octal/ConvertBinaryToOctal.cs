using System;  
public class Binary
{  
    public static void Main()
{       int n1, n,p=1;
	    int dec=0,i=1,j,d;
        int octno=0;
		

	Console.Write("Enter a binary number : ");
    n = Convert.ToInt32(Console.ReadLine());	
	n1=n;
	for (j=n;j>0;j=j/10)
	{  
          d = j % 10;
            if(i==1)
                  p=p*1;
            else
                 p=p*2;

	   dec=dec+(d*p);
	   i++;
	}
 
     i=1;

      for(j=dec;j>0;j=j/8)
       {
        octno=octno+(j % 8)*i;
        i=i*10;
        n=n/8;
       }
   
        Console.Write("\nThe equivalent Octal number : {1} \n\n",n1,octno);
}
}
