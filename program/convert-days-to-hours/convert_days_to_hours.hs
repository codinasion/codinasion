main :: IO ()
main = do 
    putStrLn "Enter days: " 
    input1 <- getLine
    let days = read input1 :: Float

    let hours = days * 24
    putStrLn $ show (hours)
