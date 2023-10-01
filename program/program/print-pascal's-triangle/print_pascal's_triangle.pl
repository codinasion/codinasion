use strict;
use warnings;

sub fact {
  my $n = shift;
  return 1 if $n < 1;
  return $n * fact($n - 1);
}

sub n_over_k {
  my $n = shift;
  my $k = shift;
  return fact($n) / ( fact($k) * fact($n - $k) );
}

sub pascal_row {
  my $n = shift;
  return map { n_over_k($n - 1, $_) } (0 .. $n - 1);
}

my $n = shift || 5;

my $max = 0;
map { $max = $_ if $_ > $max } pascal_row($n);
my $maxw = length('' . $max);
$maxw += ($maxw + 1) % 2;

foreach my $i (1..$n) {
  print ' ' x ( ( $maxw + 1 ) * ($n - $i) / 2 );
  foreach my $j ( pascal_row($i) ) {
    printf "%${maxw}d ", $j;
  }
  print "\n";
}
