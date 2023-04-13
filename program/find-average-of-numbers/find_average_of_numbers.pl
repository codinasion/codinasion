print "Enter the number of elements: ";
my $n = <STDIN>;
chomp $n;
my $sum = 0;
for (my $i = 0; $i < $n; $i++) {
  print "Enter element " . ($i+1) . ": ";
  my $num = <STDIN>;
  chomp $num; 
  $sum += $num;
}
my $average = $sum / $n;
printf "Average = %.2f\n", $average;
