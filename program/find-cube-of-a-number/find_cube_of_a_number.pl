use warnings;
use 5.010;

sub cube {
  my($c)=@_;
  return ($c*$c*$c );
}


print "Input Number : ";
$num=<STDIN>;

$cube=cube($num);
say "Output : $cube";