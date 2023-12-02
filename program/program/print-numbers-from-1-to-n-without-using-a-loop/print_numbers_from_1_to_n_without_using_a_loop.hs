printNumbers :: Int -> IO ()
printNumbers n = go 1
  where
    go :: Int -> IO ()
    go current
      | current > n = return ()
      | otherwise = do
        putStrLn $ show current
        go (current + 1)

main :: IO ()
main = do
  putStrLn "Enter a number:"
  input <- getLine
  let n = read input :: Int
  printNumbers n