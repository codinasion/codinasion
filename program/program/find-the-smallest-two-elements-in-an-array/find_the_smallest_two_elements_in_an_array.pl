@input = (12, 13, 1, 10, 34, 1);
@input = sort { $a <=> $b } @input;
if(scalar @input < 2){
    print "Array should have atleast 2 elements";
}else{
    print "@input[0],@input[1]\n";
}
