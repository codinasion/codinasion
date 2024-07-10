import Data.Char (toLower, toUpper)

consonantCase :: String -> String
consonantCase [] = []
consonantCase (x:xs)
    | elem x "aeiouAEIOU" = toLower x : consonantCase xs
    | otherwise = toUpper x : consonantCase xs

main :: IO ()
main = do
    putStrLn "Enter a string:"
    input <- getLine
    putStrLn $ "Consonant-case: " ++ consonantCase input
