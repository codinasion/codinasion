# Function to convert a single hexadecimal digit to binary
hexDigitToBinary <- function(hexDigit) {
  decimalValue <- as.integer(strtoi(hexDigit, base=16))
  binaryString <- sprintf("%04s", paste(rev(as.integer(intToBits(decimalValue))), collapse = ""))
  binaryString <- substr(binaryString, nchar(binaryString)-3, nchar(binaryString))
  
  return(binaryString)
}

# Function to convert full hexadecimal to binary
hexToBinary <- function(hexNumber) {
  hexNumber <- toupper(gsub("\\s", "", hexNumber))
  binaryResult <- ""
  
  for (i in 1:nchar(hexNumber)) {
    singleHex <- substr(hexNumber, i, i)
    binaryResult <- paste0(binaryResult, hexDigitToBinary(singleHex))
  }

  return(binaryResult)
}

# Check if an argument is provided
args <- commandArgs(trailingOnly = TRUE)
if (length(args) == 0) {
  stop("No hexadecimal number provided. Usage: Rscript convert_hexadecimal_to_binary.r <hex_number>", call. = FALSE)
}

# Use the first argument as the input
hexNumber <- args[1]
binaryResult <- hexToBinary(hexNumber)
cat("Hexadecimal:", hexNumber, "- Binary:", binaryResult, "\n")
