main :: IO ()
main = do 
    putStrLn "Enter days: " 
    input1 <- getLine
    let days = read input1 :: Float

    let minutes = days *1440
    putStrLn $ show (minutes)
