<?php
function stringToCamelCase($string, $capitalizeFirstCharacter = false) 
{
    $str = str_replace(' ', '', ucwords(str_replace(' ', ' ', $string)));
    if (!$capitalizeFirstCharacter) {
        $str[0] = strtolower($str[0]);
    }
    return $str;
}

echo stringToCamelCase('hello world');
?>
