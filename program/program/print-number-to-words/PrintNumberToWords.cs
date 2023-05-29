using System;
class NumberToWords
{
static void Main(string[] args)
{
string[] a = { "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE" };
string[] b = {"TEN", "ELEVEN", "TWELVE", "THIRTEEN", "FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN", "NINTEEN" };
string[] c = { "TEN", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY", "SEVENTY", "EIGHTY", "NINTY" };
string[] d = { "zero", "TEN", "HUNDRED", "THOUSAND", "THOUSAND", "LAKHS", "LAKHS", "CRORES", "CRORES", "HUNDRED AND" };

long number, temp = 0, strlen, value = 0;
Console.WriteLine("please enter integer ");
number = Convert.ToInt64(Console.ReadLine());

Boolean flag = false;
if (number <= 9999999999)
{
while (number >= 0)
{
strlen = number.ToString().Length;
if (number > 0)
{

value = (long)Math.Pow(10, strlen - 1);
temp = number / value;


}

switch (strlen)
{
case 1: Console.Write(" " + a[temp - 1] + " ");

break;
case 2:
if (number >= 10 && number < 20)
{
number = number % value;
if (number == 0)
{
Console.Write(" " + b[number] + " ");
}
else
{
Console.Write(" " + b[number] + " ");
}

flag = true;

}
else
{
Console.Write(" " + c[temp - 1] + " ");
}

break;
case 3:
Console.Write(a[temp - 1] + " " + d[strlen - 1]);
break;
case 4:
case 6:
case 8:
case 10:
Console.Write(" " + a[temp - 1] + " " + d[strlen - 1] + " ");
break;
case 5:
case 7:
case 9:
case 11:
value = (long)Math.Pow(10, strlen - 2);
temp = number / value;
if (temp >= 10 && temp < 20)
{
temp = temp % 10;
if (temp == 0)
{
Console.Write(" " + c[temp] + " " + d[strlen - 1] + " ");
}
else
{
Console.Write(" " + b[temp] + " " + d[strlen - 1] + " ");

}

}
else
{
long i = temp % 10;
temp = temp / 10;
Console.Write(" " + c[temp - 1] + " ");
if (i > 0)
{
Console.Write(" " + a[i - 1] + " ");

}
Console.Write(" " + d[strlen - 1] + " ");
}
break;
}
if (number == value)
{
Console.Write(" ");
break;
}
else
{
number = number % value;
}
if (number == 0 || flag == true)
{
break;
}
flag = false;
}
}
else
{
Console.WriteLine("enter numner less than 9999999999");
}

}
}
