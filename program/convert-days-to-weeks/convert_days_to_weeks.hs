main :: IO ()
main = do 
    putStrLn "Enter days: " 
    input1 <- getLine
    let days = read input1 :: Float

    let weeks = days / 7
    putStrLn $ show (weeks)
