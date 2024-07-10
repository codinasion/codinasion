#include <bits/stdc++.h>
using namespace std;

int ConvertSecondsToWeek(int seconds) {
	int secInWeek = 60 * 60 * 24 * 7;

	return seconds / secInWeek;
}

int main() {
    int n = 129600;
    cout << ConvertSecondsToWeek(604800)  << " // 1 \n";
    cout << ConvertSecondsToWeek(3024000) << " // 5 \n";
    
	return 0;
}
