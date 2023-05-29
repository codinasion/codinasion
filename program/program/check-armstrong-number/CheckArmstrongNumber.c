#include <stdio.h>

int is_armstrong(int);
int get_num_of_digits(int);
int raise_power(int, int);

int main() {
    int num;
    printf("Input  : ");
    scanf("%d", &num);
    if (is_armstrong(num)) {
        printf("Output : Armstrong Number");
    } else {
        printf("Output : Not Armstrong Number");
    }
    return 0;
}

int is_armstrong(int n) {
    int original = n;
    int power = get_num_of_digits(n);
    int sum = 0;
    for (int i = 0; i < power; i++, n /= 10) {
        sum += raise_power(n % 10, power);
    }
    return (sum == original) ? 1 : 0;
}

int get_num_of_digits(int n) {
    int result;
    for (result = 1; n /= 10; result++) {
        ;
    }
    return result;
}

int raise_power(int n, int p) {
    int result = 1;
    for (int i = 0; i < p; i++) {
        result *= n;
    }
    return result;
}
