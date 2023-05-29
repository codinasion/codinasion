main :: IO ()
main = do 
    putStrLn "Enter temperature in Fahrenheit: " 
    input <- getLine
    let fahrenheit = read input :: Float

    let kelvin = (fahrenheit - 32) * 5/9 + 273.15
    putStrLn $ "Given Fahrenheit in Kelvin: " ++ show(kelvin) ++ " K"