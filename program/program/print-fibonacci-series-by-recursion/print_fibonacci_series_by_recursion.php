<?php  

function fibonacciSeries($num){
      
    if ($num == 0)
        return 0;    
    else if ($num == 1)
        return 1;    
    else
        return fibonacciSeries($num-1) + fibonacciSeries($num-2);
}
  
$num = 5;
for ($counter = 0; $counter < $num; $counter++){  
    echo fibonacciSeries($counter),' ';
}

?>
