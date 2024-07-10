import Data.Char (digitToInt)

-- Convert an octal digit to its binary representation
octalToBinaryDigit :: Char -> String
octalToBinaryDigit '0' = "000"
octalToBinaryDigit '1' = "001"
octalToBinaryDigit '2' = "010"
octalToBinaryDigit '3' = "011"
octalToBinaryDigit '4' = "100"
octalToBinaryDigit '5' = "101"
octalToBinaryDigit '6' = "110"
octalToBinaryDigit '7' = "111"
octalToBinaryDigit _   = error "Invalid octal digit"

-- Convert an octal number string to binary
octalToBinary :: String -> String
octalToBinary = concatMap octalToBinaryDigit

main :: IO ()
main = do
    putStrLn "Enter an octal number:"
    octal <- getLine
    let binary = octalToBinary octal
    putStrLn $ "Binary equivalent: " ++ binary
