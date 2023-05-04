main :: IO ()
main = do 
   putStrLn "Enter minutes: " 
   input1 <- getLine
   let minutes = read input1 :: Float

   let days = minutes / 1440
   putStrLn $ show (days)
