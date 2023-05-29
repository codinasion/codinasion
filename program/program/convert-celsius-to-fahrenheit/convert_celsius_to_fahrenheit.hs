main :: IO ()
main = do 
    putStrLn "Enter temperature in Celsius: " 
    input <- getLine
    let celsius = read input :: Float

    let fahrenheit = (celsius * 9/5) + 32
    putStrLn $ "Given Celsius in Fahrenheit: " ++ show(fahrenheit) ++ " °F"