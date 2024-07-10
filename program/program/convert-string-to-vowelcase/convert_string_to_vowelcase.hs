import Data.Char (toLower, toUpper)

vowelCase :: String -> String
vowelCase [] = [] -- base case for empty string
vowelCase (x:xs)
    | elem x "aeiouAEIOU" = toUpper x : vowelCase xs -- if vowel, convert to uppercase
    | otherwise = toLower x : vowelCase xs -- if consonant, convert to lowercase

main :: IO ()
main = do
    putStrLn "Enter a string:"
    input <- getLine
    let result = vowelCase input
    putStrLn $ "Vowel-case converted string: " ++ result