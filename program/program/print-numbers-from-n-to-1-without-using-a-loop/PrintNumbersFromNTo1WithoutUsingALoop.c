#include <stdio.h>


void PrintFromNto1NoLoop(int n);

int main()
{
    int n = 0;

    int is_good = scanf("%d",&n);

    if(is_good == -1)
    {
        return -1;
    }

    PrintFromNto1NoLoop(n);

    return 0;
}

void PrintFromNto1NoLoop(int n)
{
    if(n == 0)
    {
        return;
    }

    printf("%d ",n);
    PrintFromNto1NoLoop(n -1);
}

