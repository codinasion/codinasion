<?php 

//Program to check if a given character input is consonant
$input = readline();

//condtion to check for consonant
if($input != 'a' &&  $input != 'A' && $input != 'e' && $input != 'i' && $input != 'I' && $input != 'o' && $input != 'O' && $input != 'U' && $input != 'u'){
    echo("Consonant");
}else{
    echo "Not a Consonant";
}

?>