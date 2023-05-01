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
        <input type="text" name="inputValue" placeholder="Value">
        <input type="submit" name="btnSubmit" value="Submit">

        <!-- Sets the output on a new line instead of behind the button -->
        <br>

        <?php
        // The for loop is used to echo the inverted pyramid.
        // The if statement is purely to let a user put in a value of choice

        // if isset checks wether the button is pressed or not
        if (isset($_POST['btnSubmit'])) {

            // In the for loop I use $i as the index, the value of $i is the user input. As long as $i is bigger than 0 it will substract 1 from the value of $i
            for ($i = $_POST['inputValue']; $i > 0; $i--) {

                // In the for loop I use $j as the index.
                // $j has a base value of 1. As long as $j is smaller or equal to $i it will add 1 to the base value of $j.
                for ($j = 1; $j <= $i; $j++) {

                    // Here $j will be outputting the number 1 (Base value of $j) to the number that is the base value of $i
                    echo "$j ";
                }

                // The echo "<br>" is used to put everything on seperated lines
                echo "<br>";
            }
        }
        ?>
    </form>
</body>

</html>