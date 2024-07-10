#include <iostream>
using namespace std;

void TheBigThree(int ARay[], int n)
{
    int Largest = ARay[0], secondLargest = ARay[0], thirdLargest = ARay[0];

    for (int i = 1; i < n; ++i) {
        if (ARay[i] > Largest)
        {
            thirdLargest = secondLargest;
            secondLargest = Largest;
            Largest = ARay[i];
        }
        else if (ARay[i] > secondLargest)
        {
            thirdLargest = secondLargest;
            secondLargest = ARay[i];
        }
        else if (ARay[i] > thirdLargest)
        {
            thirdLargest = ARay[i];
        }
    }

    cout << "\n The three largest elements are: " << Largest << ", " << secondLargest << ", " << thirdLargest << "\n";
}

int main()
{
    int n;
    cout << "\n [Note: The Array should have at least three elements.]\n\n";
    cout << " Please enter the size of the array: ";
    cin >> n;

    if (n < 3)
    {
        cout << "\n ERROR! Input Array Size < 3 \n";
        return 1;
    }

    int* ARei = new int[n];
    cout << "\n Now, enter the elements of the array:\n";

    for (int i = 0; i < n; ++i)
    {
        cout << " Element " << i + 1 << ": ";
        cin >> ARei[i];
    }

    TheBigThree(ARei, n);
    delete[] ARei;

    return 0;
}

/* Cautiously Crafted By Redzwinger */