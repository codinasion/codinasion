main :: IO ()
main = do 
   putStrLn "Enter minutes: " 
   input1 <- getLine
   let minutes = read input1 :: Float

   let hours = minutes / 60
   putStrLn $ show (hours)
