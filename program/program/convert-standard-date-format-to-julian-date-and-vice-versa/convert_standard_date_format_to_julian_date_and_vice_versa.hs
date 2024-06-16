import Data.Time.Calendar
import Data.Time.Calendar.OrdinalDate

-- Function to convert standard date format (year, month, day) to Julian date
toJulianDate :: Integer -> Int -> Int -> Day
toJulianDate year month day = fromGregorian year month day

-- Function to convert Julian date to standard date format (year, month, day)
fromJulianDate :: Day -> (Integer, Int, Int)
fromJulianDate date = toGregorian date

-- Example usage
main :: IO ()
main = do
    -- Convert standard date format to Julian date
    let julianDate = toJulianDate 2024 4 9
    putStrLn $ "Julian date: " ++ show julianDate

    -- Convert Julian date to standard date format
    let (year, month, day) = fromJulianDate julianDate
    putStrLn $ "Standard date format: " ++ show year ++ "-" ++ show month ++ "-" ++ show day
