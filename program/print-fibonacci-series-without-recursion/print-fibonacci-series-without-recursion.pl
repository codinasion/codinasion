# enter the limit
$limit = 5;



print "fibbonacci series:\n";
$flag = 0;
if ($limit == 1) {
    print "0";
    $flag = 1;
}
if ($limit == 2) {
    print "0\t1";
    $flag = 1;
}
$a    = 0;
$b    = 1;
$next = 0;
$c    = 1;
if ($flag == 0) {
    print "0\t";
    while ($c <= $limit) {

        if ($c <= 1) {
            $next = $c;
        } else {

            print "$next\t";
            $next = $a + $b;
            $a = $b;
            $b = $next;
        }

        $c = $c + 1;
    }
}