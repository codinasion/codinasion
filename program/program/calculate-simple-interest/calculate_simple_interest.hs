calculateSimpleInterest :: Double -> Double -> Double -> Double
calculateSimpleInterest principal rate time =
    (principal * rate * time) / 100

main :: IO ()
main = do
    putStrLn "Enter the principal amount:"
    principalInput <- getLine
    let principal = read principalInput :: Double

    putStrLn "Enter the rate of interest:"
    rateInput <- getLine
    let rate = read rateInput :: Double

    putStrLn "Enter the time (in years):"
    timeInput <- getLine
    let time = read timeInput :: Double

    let interest = calculateSimpleInterest principal rate time
    putStrLn $ "Simple interest: " ++ show interest
