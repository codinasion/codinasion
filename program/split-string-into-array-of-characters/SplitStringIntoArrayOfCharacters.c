#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>

int main()
{
  size_t arrayLength = 0, allocatedSize = 8;
  int *array = malloc(sizeof(*array) * allocatedSize);
  char str[1024];
  fgets(str, 1024, stdin);
  for (int i = 0; i < strlen(str); ++i)
  {
    if (arrayLength == allocatedSize)
    {
      array = realloc(array, allocatedSize *= 2);
      assert(array);
    }
    assert(arrayLength < allocatedSize);
    array[arrayLength++] = str[i];
  }
  printf("[");
  for (int i = 0; i < arrayLength; ++i)
  {
    printf("'");
    printf("%c ", array[i]);
    printf("', ");
  }
  printf("]");
  free(array);

  return 0;
}