my $str = 'hello world';
$_ = $str;
$_ = lc;
s/\s+/_/g;
print;
