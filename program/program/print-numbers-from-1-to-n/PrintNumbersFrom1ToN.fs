open System
Console.WriteLine("How many numbers to print : ");
let counter= Convert.ToInt32(Console.ReadLine());
for i = 1 to counter do
 Console.Write("{0} ",i);
