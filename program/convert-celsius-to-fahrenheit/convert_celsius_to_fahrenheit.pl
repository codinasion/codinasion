use warnings;
use 5.010;

sub c_to_f {
  my($c)=@_;
  return ($c*9/5 )+32;
}


print "Input ( C ): ";
$celsius=<STDIN>;

$fahrenheit=c_to_f($celsius);
say "Output ( F ): $fahrenheit";