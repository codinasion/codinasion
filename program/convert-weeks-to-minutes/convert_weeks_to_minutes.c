#include <stdio.h>
int main() {    

    int num_of_weeks;
    
    printf("Enter two integers: ");
    scanf("%d", &num_of_weeks);

    // calculating sum
    Total_minutes_in_given_weeks = num_of_weeks * 10080;      
    
    printf("Total minutes in %d Weeks is %d.", num_of_weeks, Total_minutes_in_given_weeks);
    return 0;
}