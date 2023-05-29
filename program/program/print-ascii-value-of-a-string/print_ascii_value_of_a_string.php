<?php

function asciiString($string){
$arr = str_split($string);
forEach($arr as $char){
 echo ord($char).' ';
}
}

asciiString('ABC');

?> 
