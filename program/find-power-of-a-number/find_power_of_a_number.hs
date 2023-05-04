main :: IO()
main = do
   let base = 2
   let expo = 3
   print (show base ++ " raised to the power of " ++ show expo ++ " is:")
   print (base^expo)
