#include <stdio.h>

int main()
{

    int Length, Width, Height, Surfacearea;
    printf("Length: ");
    scanf("%d", &Length);
    printf("Width: ");
    scanf("%d", &Width);
    printf("Height: ");
    scanf("%d", &Height);

    Surfacearea = 2 * ((Length * Width) + (Length * Height) + (Width * Height));
    printf("Surface area: %d", Surfacearea);
}