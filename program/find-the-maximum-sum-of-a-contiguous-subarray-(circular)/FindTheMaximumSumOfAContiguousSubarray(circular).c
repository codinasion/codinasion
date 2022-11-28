#include <stdio.h>

int max(int a, int b){
    if(a>b) return a;
    return b;
}

int min(int a, int b){
    if(a<b) return a;
    return b;
}

int main(){
    
    int n; //size of array
    int ans;
    scanf("%d", &n);
    int arr[n];
    for(int i = 0; i < n; i++)
        scanf("%d", &arr[i]);
    
    int total_sum = 0;
    int curr_max = arr[0], curr_min = arr[0], max_subarr_sum = arr[0], min_subarr_sum = arr[0];

    for(int i = 0; i < n; i++)
        total_sum+= arr[i];

    for(int i = 1; i < n; i++){

        curr_max = max(curr_max + arr[i], arr[i]);
        curr_min = min(curr_min + arr[i], arr[i]);

        max_subarr_sum = max(max_subarr_sum, curr_max);
        min_subarr_sum = min(min_subarr_sum, curr_min);
    }

    ans = max(max_subarr_sum, total_sum - min_subarr_sum);
    printf("%d \n", ans);

    return 0;
}