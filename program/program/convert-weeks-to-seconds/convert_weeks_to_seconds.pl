use warnings;
use 5.010;

sub w_to_s {
  my($c)=@_;
  return ($c * 604800);
}


print "Input ( W ): ";
$weeks=<STDIN>;

$seconds=c_to_f($weeks);
say "Output ( S ): $seconds";

