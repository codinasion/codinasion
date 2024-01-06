import Text.Printf (printf)

main :: IO ()
main = do
    putStrLn "Enter time in 24-hour format (HH:MM:SS):"
    input <- getLine
    let result = convertTo12HourFormat input
    case result of
        Just time12 -> putStrLn $ "Time in 12-hour format: " ++ time12
        Nothing     -> putStrLn "Invalid input. Please enter time in the format HH:MM:SS."

convertTo12HourFormat :: String -> Maybe String
convertTo12HourFormat input = do
    let components = map read $ splitOn ':' input
    case components of
        [hour, minute, second] | isValidTime hour minute second -> Just $ format12HourTime hour minute second
        _                                                        -> Nothing

isValidTime :: Int -> Int -> Int -> Bool
isValidTime hour minute second =
    hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && second >= 0 && second <= 59

format12HourTime :: Int -> Int -> Int -> String
format12HourTime hour minute second =
    let period = if hour < 12 then "AM" else "PM"
        adjustedHour = if hour == 0 then 12 else if hour <= 12 then hour else hour - 12
    in printf "%02d:%02d:%02d %s" adjustedHour minute second period

splitOn :: Eq a => a -> [a] -> [[a]]
splitOn _ [] = []
splitOn delimiter list =
    let (first, rest) = break (== delimiter) list
    in first : case rest of
        []     -> []
        (_:xs) -> splitOn delimiter xs
