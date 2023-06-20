print "Enter elements in matrix A of size 3x3: \n";
for($row=0; $row<3 ; $row++) 
{
  for($col=0; $col<3 ; $col++) 
  {
    $A[$row][$col] = <STDIN>;
  }
}

print "Enter elements in matrix B of size 3x3: \n";
for($row=0; $row<3 ; $row++) 
{
  for($col=0; $col<3 ; $col++) 
  {
    $B[$row][$col] = <STDIN>;
  }
}

for($row=0; $row<3 ; $row++) 
{
  for($col=0; $col<3 ; $col++) 
  {
    $C[$row][$col] = $A[$row][$col] + $B[$row][$col] ;
  }
}

print "Sum of the Matrices A+B is : \n";
for($row=0; $row<3 ; $row++) 
{
  for($col=0; $col<3 ; $col++) 
  {
    printf("%3d", $C[$row][$col]);
  }
  print "\n";
}
