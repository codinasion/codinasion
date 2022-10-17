
main :: IO ()
main = do 
    putStrLn "Enter a number of Weaks, and I will convert it to Seconds" 
    input <- getLine
    let weeks = read input :: Float
    let seconds = weeks * 604800
    putStrLn $ show (weeks) ++ " weeks is equal to " ++ show (seconds) ++ " seconds."