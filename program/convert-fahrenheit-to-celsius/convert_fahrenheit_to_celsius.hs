main :: IO ()
main = do 
    putStrLn "Enter temperature in Fahrenheit: " 
    input <- getLine
    let fahrenheit = read input :: Float

    let celsius = (fahrenheit - 32) * 5/9
    putStrLn $ "Given Fahrenheit in Celsius: " ++ show(celsius) ++ " °C"