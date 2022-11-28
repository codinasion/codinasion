// JavaScript program to calculate the combination of n objects taken r at a time
// n!/(r!(n-r)!) = n(n-1)(n-2)...(n-r+1)/r!

function range(a, b) {
    var total = a,i = a;
 
  while (i++< b) {
    total*=i;
  }
    return total;
}

function combination(n, r) {
    if (n==r || r==0) 
    {
      return 1;
    }
    else {
        r=(r < n-r) ? n-r : r;
        return range(r+1, n)/range(1, n-r)
    }
}

console.log(combination(5, 2));