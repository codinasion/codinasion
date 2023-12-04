print "Enter a number :";
my $n=<STDIN>;
print "\n"; 
$space = $n - 1; 
  
for ($i = 0; $i < $n; $i++) 
{ 
    for ($j = 0;$j < $space; $j++) {
        print " "; 
    }
    for ($j = 0;$j <= $i; $j++) {
        print "* "; 
    }
print "\n"; 
$space--; 
} 
$space = 0; 

for ($i = $n; $i > 0; $i--) 
{ 
    for ($j = 0; $j < $space; $j++) {
         print " "; 
    }
    for ($j = 0;$j < $i;$j++) {
        print "* "; 
    }
print "\n"; 
$space++; 
} 
