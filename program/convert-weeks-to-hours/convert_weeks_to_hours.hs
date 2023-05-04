main :: IO ()
main = do 
   putStrLn "Enter weeks: " 
   input1 <- getLine
   let weeks = read input1 :: Float

   let hours = weeks * 168
   putStrLn $ show (hours)
