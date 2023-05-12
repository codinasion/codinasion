/****************************************************************************
*	Project:	ConvertMinutesToDays						                *
*	File:		ConvertMinutesToDays.cpp           					       	*
*	Date: 		2023-01-31									        		*
*	Version: 	1.00														*
****************************************************************************/

#include <iostream>

/****************************************************************************/
int ConvertMinutesToDays(int min);
/****************************************************************************/
int main()
{
    int minutes = 0;

    std::cout << "Enter num of minutes\n";
    
    std::cin >> minutes;

    std::cout << ConvertMinutesToDays(minutes);

    return 0;
}
/****************************************************************************/
int ConvertMinutesToDays(int min)
{
    //1440 minutes in a day
    return min / 1440;
}
/****************************************************************************/

