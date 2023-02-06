#include <bits/stdc++.h>
using namespace std;

void convertSectoDay(int n)
{
  int day = n / (24 * 3600);

  n = n % (24 * 3600);
  int hour = n / 3600;

  n %= 3600;
  int minutes = n / 60;

  n %= 60;
  int seconds = n;

  cout << day << " "
       << "days " << hour
       << " "
       << "hours " << minutes << " "
       << "minutes " << seconds << " "
       << "seconds " << endl;
}

int main()
{
  // Given n is in hours
  int n;
  cout << "Enter the number of hours: ";
  cin >> n;
  int seconds = n * 3600;
  convertSectoDay(seconds);
  return 0;
}
