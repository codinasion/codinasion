main = do
  putStrLn "Insert a string to convert: "
  line <- getLine
  print (words line)