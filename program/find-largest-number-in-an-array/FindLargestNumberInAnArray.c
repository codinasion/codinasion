#include <stdio.h>

int main()
{
    int n,maxi=0;
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++) scanf("%d",&arr[i]);
    for(int i=0;i<n;i++){
        if(maxi<arr[i]){
            maxi=arr[i];
        }
    }
    printf("%d",maxi);
    return 0;
}
