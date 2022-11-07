function factorial(num) {
    if (num == 0) return 1
    return num * factorial(num - 1)
}

function permutations(total, sample) {
  try {
    return factorial(total)/factorial(total-sample)
  }
  catch(error){
    throw error
  }
}

console.log(permutations(5, 2))
