main :: IO ()
main = do 
    putStrLn "Enter a number of hours, and I will convert it to days" 
    input <- getLine
    let hours = read input :: Float
    let days = hours/24.0
    putStrLn $ show (hours) ++ " hours is equal to " ++ show (days) ++ " days."
