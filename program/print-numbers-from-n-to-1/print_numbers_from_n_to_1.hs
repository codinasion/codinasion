

repeatNTimes n action =
 do
  action
  repeatNTimes (n-1) action

main = do
  n <- getLine
  let num = nth (read n :: Integer)
  repeatNTimes num (putStrLn num)

  