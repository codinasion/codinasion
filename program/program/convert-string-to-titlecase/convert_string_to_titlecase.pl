print " Enter a pharse : ";
$title = <STDIN>;
$title =~ s/(\w+)/\u\L$1/g;
printf $title;
