celsiusToKelvin :: Float -> Float
celsiusToKelvin celsius = celsius + 273.15

main :: IO ()
main = do
    putStrLn "Enter temperature in Celsius:"
    input <- getLine
    let celsius = read input :: Float
        kelvin = celsiusToKelvin celsius
    putStrLn $ "Temperature in Kelvin: " ++ show kelvin
