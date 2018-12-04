#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
	char caseID[6] = "lxd244";
	char inputCaseID[6]  = "";
	char password[10] = "8520";
	char inputPassword[10] = "";
	
	printf("Initial ID is %s \n", caseID);
	printf("Initial password is %s \n", password);

    printf("Enter your ID \n");
	scanf("%s", inputCaseID);
	
	//printf("Initial ID now is %s \n", caseID);
	printf("Initial password is now changed to %s \n", password);	
	
	printf("Enter your password \n");
	scanf("%s", inputPassword);
   
	printf("Input ID is %s \n", inputCaseID);
	printf("Input password is %s \n", inputPassword);	
	
       
	if (strcmp(password,inputPassword) == 0)
		printf("Access granted \n");
	else
		printf("Access denied \n");

    	return 0;
}












