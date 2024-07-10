main :: IO ()
main = do
    putStrLn "Enter a character:"
    input <- getLine
    case input of
        [char] -> putStrLn $ "ASCII value of '" ++ [char] ++ "' is: " ++ show (asciiValue char)
        _      -> putStrLn "Invalid input. Please enter a single character."

asciiValue :: Char -> Int
asciiValue char = fromEnum char
