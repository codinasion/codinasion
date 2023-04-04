use warnings;
use strict;
print "Enter the first word : ";
my $word1 = <STDIN>;
print "Enter the second word : ";
my $word2 = <STDIN>;
my $letters1 = join "", sort split "", $word1;
my $letters2 = join "", sort split "", $word2;
print $letters1;
print $letters2;
if ($letters1 eq $letters2) {
  print "String are Anagram"; 
}
else {
  print "String are not Anagram";
}
