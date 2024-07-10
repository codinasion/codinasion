#include <iostream>
using namespace std;

int ternarySearch(int ARay[], int size, int value)
{
    int l = 0;
    int r = size - 1;

    while (l <= r) 
    {
        int halfIsgood = (r - l) / 3;
        int mid1 = l + halfIsgood;
        int mid2 = r - halfIsgood;

        if (ARay[mid1] == value) 
        {
            return mid1;
        }

        if (ARay[mid2] == value) 
        {
            return mid2;
        }

        if (value < ARay[mid1]) 
        {
            r = mid1 - 1;
        }
        else if (value > ARay[mid2]) 
        {
            l = mid2 + 1;
        }
        else 
        {
            l = mid1 + 1;
            r = mid2 - 1;
        }
    }

    return -1;
}

int main() 
{
    int ARay[] = { 1, 2, 3, 4, 5 };
    int size_ARay = sizeof(ARay) / sizeof(ARay[0]);
    int findThis = 4;

    int ansThing = ternarySearch(ARay, size_ARay, findThis);

    if (ansThing != -1) 
    {
        cout << "Element found! It is located at index " << ansThing << endl;
    }
    else 
    {
        cout << "ERROR! The given element does not exist in the current array :(" << endl;
    }

    return 0;
}

/* Cautiously Crafted By Redzwinger */