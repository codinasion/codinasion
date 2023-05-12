/****************************************************************************
*	Project:	FindTheAverageOfAllNumbersInAnArray									                *
*	File:		FindTheAverageOfAllNumbersInAnArray.cpp                    					       	*
*	Date: 		2023-01-31									        		*
*	Version: 	1.00														*
****************************************************************************/
#include <iostream> // cout,cin
#include <vector>  // vector

/****************************************************************************/
int FindTheAverageOfAllNumbersInAnArray(std::vector<int> arr);
/****************************************************************************/
int main()
{

    std::size_t size;

    std::cout << "enter size of arr" << std::endl;
    std::cin >> size;

    std::vector<int> arr;

    arr.resize(size); // resize to save time

    for(std::size_t i = 0; i < size; ++i)
    {
        std::cout << "enter element " << i << " of arr" << std::endl;
        std::cin >> arr[i];
    }

    std::cout << "Average of all nums in the arr: " << FindTheAverageOfAllNumbersInAnArray(arr);

    return 0;
}
/****************************************************************************/
int FindTheAverageOfAllNumbersInAnArray(std::vector<int> arr)
{
    int res = 0;

    for(std::size_t i = 0; i < arr.size(); ++i)
    {
        res += arr[i];
    }

    res /= arr.size();

    return res;
}
/****************************************************************************/

