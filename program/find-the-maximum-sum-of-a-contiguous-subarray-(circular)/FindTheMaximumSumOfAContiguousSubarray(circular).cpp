#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> arr;
    int n;
    int ans;
    while(cin >> n)
        arr.push_back(n);
    
    int total_sum = 0;
    int curr_max = arr[0], curr_min = arr[0], max_subarr_sum = arr[0], min_subarr_sum = arr[0];

    for(int i = 0; i < arr.size(); i++)
        total_sum+= arr[i];

    for(int i = 1; i < arr.size(); i++){
        curr_max = max(curr_max + arr[i], arr[i]);
        curr_min = min(curr_min + arr[i], arr[i]);

        max_subarr_sum = max(max_subarr_sum, curr_max);
        min_subarr_sum = min(min_subarr_sum, curr_min);
    }

    ans = max(max_subarr_sum, total_sum - min_subarr_sum);
    cout << ans << endl;

    return 0;
}