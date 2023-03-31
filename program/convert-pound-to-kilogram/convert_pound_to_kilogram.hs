main = do
    putStrLn "Enter weight in pounds: "
    line <- getLine
    let pounds = (read line :: Double)
    putStrLn (line ++ " pounds equal to " ++ show (poundsTokilos pounds) ++ " kilograms.")
    
poundsTokilos pounds = pounds * 0.453592