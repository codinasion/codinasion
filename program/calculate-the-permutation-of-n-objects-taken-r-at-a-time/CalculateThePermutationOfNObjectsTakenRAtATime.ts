function factorial(num: number) : number {
    if (num == 0) return 1
    return num * factorial(num - 1)
}

function permutations(total: number, sample:number) : number {
  if(total>sample){
    return factorial(total)/factorial(total-sample)
  } else {
    throw new Error(`ERROR: supplied total > sample; permutations(total=${total}, sample=${sample})`)
  }
}

console.log(permutations(5, 2))
