<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- Form is used to give a visual representation of what it could look like in a website -->
    <form method="POST">
        <input type="text" name="inputValueN" placeholder="Value">
        <input type="submit" name="btnSubmit" value="Submit">

        <!-- Sets the output on a new line instead of behind the button -->
        <br>

        <!-- PHP code -->
        <?php
        // Only excecute the php code when the button is pressed.
        if (isset($_POST['btnSubmit'])) {

            // Get the user input value and name it $rows for a more simplefied view of the code
            $rows = $_POST['inputValueN'];

            for ($i = 0; $i < $rows; $i++) {
                $num = 1;

                for ($j = $rows; $j > $i; $j--) {
                    // Adds spacing around the triangle to get a nice visual representation
                    echo "&nbsp;&nbsp;";
                }

                for ($k = 0; $k <= $i; $k++) {
                    echo "$num";

                    if ($k < $i) {
                        // Adds spacing around the triangle to get a nice visual representation
                        echo "&nbsp;&nbsp";
                    }

                    $num = $num * ($i - $k) / ($k + 1);
                }

                echo "<br>";
            }
        }

        ?>

    </form>
</body>

</html>