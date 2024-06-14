@input = qw(1, 2, 0, 4, 3, 0, 5, 0);  
@zeroArr = qw();
@nonZeroArr = qw();
foreach $i (@input) {  
  if($i == 0){
    push(@zeroArr, $i);
  }else{
    push(@nonZeroArr, $i);
  }
} 

@result = (@nonZeroArr, @zeroArr);

print(@result);
