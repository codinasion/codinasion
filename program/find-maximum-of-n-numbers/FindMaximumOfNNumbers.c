#include <stdio.h>

/**
 * find_max - find the maximum value
 * @n: array
 * @len: length of array
 * 
 * Return: max
 */

int find_max(int n[], int len)
{
    int max = 0, i = 0;

    while (i < len)
    {
        if (n[i] > max)
        {
            max = n[i];
        }
        i++;
    }
    return (max);
}