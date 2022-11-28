#include <stdio.h>

int main()
{
    int n;
    scanf("%d",&n);
    int arr[n];
    for(int i=0;i<n;i++) scanf("%d",&arr[i]);
    int target;
    scanf("%d",&target);
    int start=0,end=n-1,mid,c=0;
    while(start<=end){
        mid=(start+end)/2;
        if(arr[mid]==target) {c++;break;}
        else if(arr[mid]<target) start=mid+1;
        else end=mid-1;
    }
    if(c>0) printf("%d",mid+1);
    else printf("Not found");
    return 0;
}
