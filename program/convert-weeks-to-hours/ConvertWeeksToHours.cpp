#include <iostream>

using namespace std;

int main()
{
    int num_of_weeks;
    cout << "Enter Number of Weeks : ";
    cin >> num_of_weeks;
    
    int total_hrs = num_of_weeks * 168;

    cout << "\nTotal hrs is "<<num_of_weeks<<" weeks : " << total_hrs << endl;
    
    return 0;
}
