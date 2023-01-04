#include <iostream>
#include <math.h>
#include <vector>

using namespace std;

int findArithmeticProgressionSum(vector<int> v) {

  int n = v.size();

  if (n == 1) {
    return v[0];
  }

  int a = v[0];
  int d = v[1] - a;

  int an = a + (n - 1) * d;

  return n / 2 * (a + an);
}

int main() {

  vector<int> v = {-2, 4, 10, 16, 22};

  cout << findArithmeticProgressionSum(v);

  return 0;
}
