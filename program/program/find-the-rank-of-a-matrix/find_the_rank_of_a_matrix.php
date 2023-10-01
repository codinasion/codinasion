<?php

$R = 3;
$C = 3;

function swap(&$mat, $row1, $row2, $col)
{
    for ($i = 0; $i < $col; $i++)
    {
        $temp = $mat[$row1][$i];
        $mat[$row1][$i] = $mat[$row2][$i];
        $mat[$row2][$i] = $temp;
    }
}

function rankOfMatrix($mat)
{
    global $R, $C;
    $rank = $C;

    for ($row = 0; $row < $rank; $row++)
    {
        if ($mat[$row][$row])
        {
            for ($col = 0; $col < $R; $col++)
            {
                if ($col != $row)
                {
                    $mult = $mat[$col][$row] / $mat[$row][$row];
                    for ($i = 0; $i < $rank; $i++)
                        $mat[$col][$i] -= $mult * $mat[$row][$i];
                }
            }
        }
        else
        {
            $reduce = true;
            for ($i = $row + 1; $i < $R; $i++)
            {
                if ($mat[$i][$row])
                {
                    swap($mat, $row, $i, $rank);
                    $reduce = false;
                    break ;
                }
            }

            if ($reduce)
            {
                $rank--;
                for ($i = 0; $i < $R; $i++)
                    $mat[$i][$row] = $mat[$i][$rank];
            }

            $row--;
        }
    }
    return $rank;
}

function display($mat, $row, $col)
{
    for ($i = 0; $i < $row; $i++)
    {
        for ($j = 0; $j < $col; $j++)
            print(" $mat[$i][$j]");
        print("\n");
    }
}

$mat = array(array(1, 2, 3),
                array(4, 5, 6),
                array(7, 8, 9));
print("Rank of the matrix is : ".rankOfMatrix($mat));

?>
