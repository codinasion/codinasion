#include <stdio.h>
#include <string.h>

int main()
{   
    char name[30] = "hello world";
    int length = strlen(name); 
    int res_ind = 0;
    for(int i = 0; i < length; i++) {
        if(name[i] == ' ') {
            name[i + 1] = toupper(name[i + 1]);
        }
        else {
            name[res_ind++] = name[i];   
        }
    }
    
    printf("%s",name);
    
    return 0;
}
