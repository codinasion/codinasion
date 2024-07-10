main = do
    putStrLn "Please enter the number of weeks: "
    line <- getLine
    let weeks = (read line :: Int)
    let x = weeksToDays weeks

    putStrLn ("Number of days: " ++ show (weeksToDays weeks))

weeksToDays weeks = weeks * 7