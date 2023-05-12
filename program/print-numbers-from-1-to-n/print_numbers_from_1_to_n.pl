sub print1ToN {
for ($count = 1 ; $count <= $_[0] ; $count++)
{
    print $count."\n";
   
}
}
print1ToN(5);
