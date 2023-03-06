using System;
class Conversion{
static int octalToDecimal(int n)
{
int num = n;
int dec_value = 0;

int b_ase = 1;

int temp = num;
while (temp > 0)
{
	int last_digit = temp % 10;
	temp = temp / 10;

	dec_value += last_digit * b_ase;

	b_ase = b_ase * 8;
}

return dec_value;
}

static string decToHexa(int n)
{
char []hexaDeciNum = new char[100];

int i = 0;
string ans = "";

while(n != 0)
{
	int temp = 0;
	temp = n % 16;
	if(temp < 10)
	{
	hexaDeciNum[i] = (char)(temp + 48);
	i++;
	}
	else
	{
	hexaDeciNum[i] = (char)(temp + 87);
	i++;
	}

	n = n / 16;
}

for(int j = i - 1; j >= 0; j--)
{
	ans += hexaDeciNum[j];
}

return ans;
}

public static void Main(string []args)
{
string octnum, hexnum;
int decnum;

Console.WriteLine ("Please enter an Octal number :");
octnum = Console.ReadLine();

decnum = octalToDecimal(Int32.Parse(octnum));

hexnum = decToHexa(decnum);

Console.Write("Equivalent Hexadecimal Value = " +
				hexnum);
}
}

