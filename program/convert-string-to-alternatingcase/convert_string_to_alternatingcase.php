<?php

function alternatingCase($str) {
 
    $do_caps = false;
    $result = '';
    for ($i = 0; $i < strlen($str); $i++)
    {
      $char = substr($str, $i, 1);
      if (stripos('abcdefghijklmnopqrstuvwxyz', $char) !== false)
      {
            if ($do_caps)
            {
                $char = strtoupper($char);
                $do_caps = false;
            }
            else
            {
                $do_caps = true;
            }
      }
      $result .= $char;
    }
    return $result;
}

echo alternatingCase("hello world")

?>
