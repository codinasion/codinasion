#include <stdio.h>

// Write a C program to convert weeks to seconds

// 1 week = 7 days = 168 hours = 10080 minutes = 604800 seconds

// Input  : 5
// Output : 3024000



void main()
{
    int num;

    printf("Enter number of weeks : ");
    scanf("%d", &num);
    
    int total_seconds;

    total_seconds = num * 604800;

    printf("\nTotal Seconds is  : %d\n", total_seconds);
}

// Contributed by Technical Amanjeet 
