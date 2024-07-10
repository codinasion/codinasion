my $str = 'hello world';
$_ = $str;
$_ = ucfirst;
s/(?<=[^\W_]) +([^\W_])|_+/\U$1/g;
print;
