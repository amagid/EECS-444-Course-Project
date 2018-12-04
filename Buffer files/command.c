// Some part of code was adapted from this webpage:
// https://samsclass.info/127/proj/p1-lbci.htm

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaals$IFS-l

#include <stdio.h>
#include <string.h>

int print(char *username, char *cmd){
		// Will hold the command to be executed in terminal
        char command[20];
        char buff[20];
		
		// Print the addresses of buffer and command
        printf("Buffer address:    %x\n", buff);
        printf("Command address: %x\n", command);
		
		// Copies the arguments into command and buffer variables
        strcpy(command, cmd);
        strcpy(buff, username);
		
		// Prints the buffer overflow sent to command
        printf("Username: \n", buff);
        printf("The command which will be executed: %s\n", command);
		
		// Executes the command
        fflush(stdout);
        system(command);
}

main(){
		// Declares the variable
        char username[100];
		// Asks about the username, the malicious code will be included in this part
        printf("Username: \n");
        scanf("%s", username);
		// Call the print function
        print(username, "pwd");
}



