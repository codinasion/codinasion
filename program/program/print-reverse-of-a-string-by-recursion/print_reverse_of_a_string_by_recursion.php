<?php
function Reverse($str){

    $len = strlen($str);
    if($len == 1){
        return $str;
    }
    else{
        $len--;
        return Reverse(substr($str,1, $len)).substr($str, 0, 1);
    }
}
$str = "Sachin";
print_r(Reverse($str));
?>
