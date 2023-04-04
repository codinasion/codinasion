main = do
    putStrLn "Input Number of Years: "
    line <- getLine
    let int = (read line :: Int)
    putStrLn ("Total Weekend Days: " ++ show (totalWeekends int))
    
totalWeekends n = n * 104