<?php

function rotate90Degrees($array)
{
    $result = array();
    foreach (array_values($array) as $key => $sub_array)
    {
        foreach (array_values($sub_array) as $sub_key => $value)
        {
            if (empty($result[$sub_key]))
            {
                $result[$sub_key] = array($value);
            }
            else
            {
                array_unshift($result[$sub_key], $value);
            }
        }
    }
    return $result;
}

$array = array(
    array(1, 2, 3),
    array(4, 5, 6),
    array(7, 8, 9)
);


print_r(rotate90Degrees($array));

?>
