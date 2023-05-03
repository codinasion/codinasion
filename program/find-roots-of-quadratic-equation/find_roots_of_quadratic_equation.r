
cat("Enter the coefficients of the quadratic equation (a b c): ")
coefficients <- scan()


discriminant <- coefficients[2]^2 - 4 * coefficients[1] * coefficients[3]

if (discriminant < 0) {
  cat("The quadratic equation has no real roots.")
} else if (discriminant == 0) {
  root <- -coefficients[2] / (2 * coefficients[1])
  cat("The quadratic equation has one real root: ", root, ".")
} else {
  root1 <- (-coefficients[2] + sqrt(discriminant)) / (2 * coefficients[1])
  root2 <- (-coefficients[2] - sqrt(discriminant)) / (2 * coefficients[1])
  cat("The quadratic equation has two real roots: ", root1, " and ", root2, ".")
}
