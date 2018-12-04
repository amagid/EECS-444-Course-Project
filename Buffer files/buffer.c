#include <stdlib.h>
#include <stdio.h>
#include <string.h>

main() {
	// Holds two different variables allocated next to each other
	char first[5];
	char second[5];
	
	// Prints the addresses of both variables
	printf("first address %p\n", (void *)first);
	printf("second address %p\n", (void *)second);
	
	// Buffer overflow occurs if length is > 5
	printf("Type something: \n");
	scanf("%s", second);
	
	// Prints the values of variables
	printf("%s\n", first);
	printf("%s\n", second);	
}