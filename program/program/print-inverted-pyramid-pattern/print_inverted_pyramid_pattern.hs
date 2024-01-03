main = do
  let n = 5
  mapM_ (putStrLn . unwords . map show) [[1..x] | x <- [n,n-1..1]]
