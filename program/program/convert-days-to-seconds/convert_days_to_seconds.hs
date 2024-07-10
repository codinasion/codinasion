main :: IO ()
main = do 
    putStrLn "Enter days: " 
    input1 <- getLine
    let days = read input1 :: Float

    let seconds = days * 86400
    putStrLn $ show (seconds)
