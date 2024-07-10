@input = (10, 4, 3, 50, 23, 90);
@input = sort { $b <=> $a } @input;
if(scalar @input < 3){
    print "Array should have atleast 3 elements";
}else{
    print "@input[0],@input[1],@input[2]\n";
}
