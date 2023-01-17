function findSecondMax(array $arr) {
    
    if(empty($arr)) {
        return;
    }

    $max = PHP_INT_MIN;
    $secondMax = PHP_INT_MIN;
    
    //Traverse an array
    foreach($arr as $number) {
        
        if($number > $max) {
            
            $secondMax = $max;
            $max = $number;
        }
        
        if($number > $secondMax && $number < $max) {
            $secondMax = $number;
        }
    }
    
    return $secondMax;
}
 
$arr = array(1, 2, 3, 4);
 
$second_maximum = findSecondMax($arr);
 
echo "Second Highest Element is ".$second_maximum;
