# Module 4: Environment Variables Example Test

**Q: What is the purpose of environment variables in a system?**
- A) They store user files.
- B) They allow users to interact directly with hardware.
- C) They provide configurable settings for processes.
- D) They are used only for memory management.

**Answer:** C

---

**Q: Where are global environment variables typically stored on a Linux system?**
- A) /etc/passwd
- B) /etc/environment
- C) ~/.bashrc
- D) /proc

**Answer:** B

---

**Q: What command is used to view all current environment variables in Linux?**
- A) env
- B) printenv
- C) ls
- D) cat

**Answer:** B

---

**Q: Which of the following functions in C is used to retrieve the value of an environment variable?**
- A) getenv()
- B) setenv()
- C) putenv()
- D) openenv()

**Answer:** A

---

**Q: Which environment variable commonly holds the directories for executable programs?**
- A) HOME
- B) PATH
- C) USER
- D) SHELL

**Answer:** B

---

**Q: How does a Set-UID program impact environment variables?**
- A) It ignores them completely.
- B) It uses them only for debugging.
- C) It can be influenced by user-defined environment variables, which can introduce security risks.
- D) It automatically removes all environment variables.

**Answer:** C

---

**Q: What is the risk associated with environment variables in privileged programs?**
- A) They are always visible in the terminal.
- B) They can be modified by the system only.
- C) They might be trusted inputs that are vulnerable to manipulation by attackers.
- D) They are static and cannot be changed.

**Answer:** C

---

**Q: What command in Linux sets a new environment variable temporarily for the current session?**
- A) export
- B) echo
- C) setenv
- D) envset

**Answer:** A

---

**Q: What does the `execve()` system call in C allow you to do regarding environment variables?**
- A) Set new environment variables for the current process only.
- B) Pass environment variables to a newly executed program.
- C) Permanently modify environment variables in `/etc/environment`.
- D) Delete all environment variables of the current process.

**Answer:** B

---

**Q: How does a dynamic linker utilize environment variables in a Linux system?**
- A) To locate files in the user’s home directory.
- B) To dynamically load libraries at runtime based on specified paths.
- C) To automatically configure network settings.
- D) To create new processes.

**Answer:** B

---


**Q: Which command would you use to list all current environment variables in a Linux shell?**
- A) listenv
- B) getenv
- C) env
- D) echoenv

**Answer:** C

---

**Q: Which environment variable specifies the user's home directory in Linux?**
- A) HOME
- B) PATH
- C) USER
- D) SHELL

**Answer:** A

---

**Q: In the C programming language, which function is commonly used to add or update an environment variable?**
- A) getenv()
- B) putenv()
- C) removeenv()
- D) addenv()

**Answer:** B

---

**Q: What happens to the environment variables of a parent process when a new process is created using the `fork()` system call?**
- A) They are copied to the child process.
- B) They are deleted in the child process.
- C) They are read-only in the child process.
- D) They are inaccessible to the child process.

**Answer:** A

---

**Q: Which of the following is NOT an environment variable in a typical Linux system?**
- A) PATH
- B) USER
- C) TEMP
- D) PS1

**Answer:** C

---

**Q: What risk is posed by allowing untrusted users to set environment variables for privileged programs?**
- A) The environment variables might be ignored.
- B) The user could potentially modify privileged program behavior.
- C) Only the shell configuration is affected.
- D) It slows down the system performance.

**Answer:** B

---

**Q: Which function in C can be used to delete an existing environment variable?**
- A) removeenv()
- B) delenv()
- C) unsetenv()
- D) getenv()

**Answer:** C

---

**Q: What environment variable would you modify to change the default shell prompt in Linux?**
- A) PATH
- B) SHELL
- C) PS1
- D) USER

**Answer:** C

---

**Q: What does the `execve()` system call do in relation to environment variables?**
- A) It clears all environment variables.
- B) It passes specified environment variables to a new program.
- C) It logs all environment variables to a file.
- D) It copies environment variables from the child process to the parent.

**Answer:** B

---

**Q: Which environment variable might a program use to locate specific libraries during execution?**
- A) LD_LIBRARY_PATH
- B) USER
- C) HOME
- D) BIN

**Answer:** A

---


**Q: Which of the following commands will display the value of a specific environment variable named `USER`?**
- A) echo $USER
- B) print $USER
- C) getenv USER
- D) export USER

**Answer:** A

---

**Q: In C programming, which variable type allows a process to access its environment variables within the `main` function?**
- A) env
- B) argv
- C) environ
- D) envp

**Answer:** D

---

**Q: Which file typically contains user-specific environment variables in a Linux system?**
- A) /etc/passwd
- B) /etc/environment
- C) ~/.bashrc
- D) /var/log

**Answer:** C

---

**Q: When using the `setenv()` function in C, what does it do?**
- A) Sets or updates an environment variable.
- B) Deletes an environment variable.
- C) Prints all environment variables.
- D) Restarts environment variables.

**Answer:** A

---

**Q: What is the main security concern when privileged programs use environment variables without sanitization?**
- A) They can be permanently deleted.
- B) They can be manipulated to change program behavior.
- C) They cannot be accessed by the program.
- D) They always contain user passwords.

**Answer:** B

---

**Q: Which of the following system calls replaces a process’s memory with a new program but can pass on specific environment variables?**
- A) exec
- B) execve
- C) fork
- D) run

**Answer:** B

---

**Q: In a Linux system, which environment variable determines where the system should look for executable files when a command is entered?**
- A) HOME
- B) USER
- C) SHELL
- D) PATH

**Answer:** D

---

**Q: Which command can remove an environment variable in a session in Linux?**
- A) deleteenv
- B) unset
- C) removeenv
- D) export

**Answer:** B

---

**Q: What is a common attack that leverages improperly sanitized environment variables in privileged programs?**
- A) Port scanning
- B) Buffer overflow
- C) File deletion
- D) Social engineering

**Answer:** B

---

**Q: Environment variables stored in `/etc/environment` affect which users?**
- A) Only the root user
- B) Only the user who created the variables
- C) All users on the system
- D) Only guest users

**Answer:** C

---


**Q: Which command temporarily sets an environment variable in a Linux session?**
- A) export VARIABLE=value
- B) set VARIABLE=value
- C) env VARIABLE=value
- D) config VARIABLE=value

**Answer:** A

---

**Q: Which environment variable is used to define the default text editor in many Unix-based systems?**
- A) PATH
- B) EDITOR
- C) USER
- D) SHELL

**Answer:** B

---

**Q: Which of the following describes an environment variable?**
- A) A command that installs system software.
- B) A file on disk that stores data.
- C) A name-value pair that influences the behavior of processes.
- D) A tool for monitoring system logs.

**Answer:** C

---

**Q: In a C program, which global variable is often used to access environment variables outside of the `main()` function?**
- A) env
- B) getenv
- C) environ
- D) env_list

**Answer:** C

---

**Q: What is the significance of the `LD_PRELOAD` environment variable?**
- A) It specifies which library should load before other libraries.
- B) It defines the default shell.
- C) It sets the system time zone.
- D) It configures the primary network interface.

**Answer:** A

---

**Q: Which command in Linux can display a single environment variable’s value, such as `HOME`?**
- A) cat $HOME
- B) env $HOME
- C) echo $HOME
- D) showenv HOME

**Answer:** C

---

**Q: Which environment variable specifies the language and regional settings for programs on Linux?**
- A) LANG
- B) LC_ALL
- C) LOCALE
- D) REGION

**Answer:** A

---

**Q: Environment variables can be inherited by child processes in Linux. Which method can a parent process use to prevent specific variables from being inherited?**
- A) Use `unset` before forking the child process.
- B) Run `removeenv` before starting the child.
- C) Configure the child process to ignore parent variables.
- D) Rename the environment variable.

**Answer:** A

---

**Q: Which environment variable is often used by programs to locate temporary storage locations?**
- A) TMPDIR
- B) HOME
- C) PATH
- D) CACHE

**Answer:** A

---

**Q: In Unix-based systems, where are user-specific environment variables often defined for login shells?**
- A) /etc/profile
- B) ~/.bash_profile or ~/.profile
- C) /usr/local/etc
- D) /var/log/env

**Answer:** B

---


**Q: Which of the following commands in Linux can be used to permanently set a user-level environment variable?**
- A) export VARIABLE=value
- B) set VARIABLE=value
- C) Add to ~/.bashrc
- D) echo VARIABLE=value

**Answer:** C

---

**Q: Which environment variable is commonly used to specify the shell a user operates in on a Linux system?**
- A) PATH
- B) SHELL
- C) USER
- D) HOME

**Answer:** B

---

**Q: What function in C programming can modify or add environment variables during runtime?**
- A) getenv()
- B) setenv()
- C) putenv()
- D) unsetenv()

**Answer:** C

---

**Q: Which of the following is true about environment variables on Unix-like systems?**
- A) They can only be set by root users.
- B) They are automatically encrypted by the system.
- C) They can affect program behavior by providing external data.
- D) They cannot be modified once set.

**Answer:** C

---

**Q: Which of the following files typically stores system-wide environment variables in Linux?**
- A) ~/.profile
- B) /etc/environment
- C) ~/.bashrc
- D) /var/log/env

**Answer:** B

---

**Q: Which environment variable might a developer change to specify which directories are searched for executable files?**
- A) LIBRARY_PATH
- B) TEMP
- C) PATH
- D) PS1

**Answer:** C

---

**Q: In C programming, the function `unsetenv()` is used to:**
- A) Retrieve the value of an environment variable.
- B) Modify the current environment variable.
- C) Remove an environment variable from the environment.
- D) List all environment variables.

**Answer:** C

---

**Q: Which of the following environment variables in Unix-like systems often specifies the user’s preferred text editor?**
- A) EDITOR
- B) SHELL
- C) USER
- D) TERM

**Answer:** A

---

**Q: What is the role of the `LD_LIBRARY_PATH` environment variable in a Linux environment?**
- A) Defines the system’s language and locale settings.
- B) Specifies directories to search for shared libraries.
- C) Identifies the current shell being used.
- D) Stores the path to user’s home directory.

**Answer:** B

---

**Q: In Linux, which command can temporarily set an environment variable for a single command execution?**
- A) export
- B) env
- C) set
- D) echo

**Answer:** B

---

**Q: What is one potential security risk associated with environment variables in Set-UID programs?**
- A) They can be modified only by system administrators.
- B) They can be used by attackers to influence program behavior unexpectedly.
- C) They are visible only to the process that set them.
- D) They are encrypted by default.

**Answer:** B

---

**Q: Which environment variable would you configure to customize the format of your command-line prompt in Linux?**
- A) PATH
- B) PS1
- C) EDITOR
- D) HOME

**Answer:** B

---

**Q: In Linux, which file is typically used to set environment variables that should only be available to a single user during login sessions?**
- A) /etc/environment
- B) ~/.bash_profile
- C) /etc/profile
- D) /var/log/environment

**Answer:** B

---

**Q: Which C function would you use to obtain the value of an environment variable within a program?**
- A) putenv()
- B) setenv()
- C) getenv()
- D) unsetenv()

**Answer:** C

---

**Q: What is the purpose of the `environ` variable in C programming?**
- A) To set new environment variables
- B) To delete existing environment variables
- C) To access the environment variables as a global variable
- D) To modify the PATH variable

**Answer:** C

---

**Q: Which environment variable is used to define directories where temporary files can be stored?**
- A) HOME
- B) TEMP
- C) USER
- D) TMPDIR

**Answer:** D

---

**Q: In Unix-like systems, where are global environment variables accessible by all users typically set?**
- A) /home directory
- B) /etc/environment
- C) ~/.bashrc
- D) ~/.profile

**Answer:** B

---

**Q: What command would display all environment variables and their values in a Linux terminal?**
- A) setenv
- B) printenv
- C) listenv
- D) envlist

**Answer:** B

---

**Q: In Linux, the `PATH` environment variable is modified. What effect does this have on the system?**
- A) It changes the system’s default text editor.
- B) It controls which directories are searched for executable files.
- C) It sets the default user shell.
- D) It limits user permissions.

**Answer:** B

---

**Q: What potential attack surface does an environment variable like `LD_PRELOAD` present for privileged programs?**
- A) It can force a program to load a malicious library.
- B) It can prevent a program from executing.
- C) It encrypts all libraries loaded by the program.
- D) It bypasses all program security checks.

**Answer:** A

---

**Q: In a Linux system, how would you set a temporary environment variable `MYVAR` with the value `123` only for the current shell session?**
- A) set MYVAR=123
- B) export MYVAR=123
- C) MYVAR=123
- D) MYVAR="123"

**Answer:** B

---

**Q: The environment variable `SHELL` in Unix-based systems is typically set to which of the following?**
- A) The path to the default user shell (e.g., /bin/bash)
- B) The user’s home directory
- C) The hostname of the system
- D) The currently active directory

**Answer:** A

---

**Q: What is a key security practice regarding the handling of environment variables in privileged programs?**
- A) Trusting user-defined environment variables
- B) Disabling environment variables altogether
- C) Sanitizing and restricting certain environment variables before program execution
- D) Allowing environment variables to control program privileges

**Answer:** C

---

**Q: In C programming, which environment variable function does not modify the process’s environment directly but rather uses a temporary copy?**
- A) setenv()
- B) getenv()
- C) putenv()
- D) unsetenv()

**Answer:** B

---

**Q: What is the purpose of the `HOME` environment variable in Unix-based systems?**
- A) Specifies the path to the default shell
- B) Stores the hostname of the machine
- C) Defines the user’s home directory path
- D) Contains the user’s preferred text editor

**Answer:** C

---

**Q: In Unix-based systems, which environment variable can affect the localization, such as language and date format, of applications?**
- A) PATH
- B) LC_ALL
- C) HOME
- D) TEMP

**Answer:** B

---

**Q: Which of the following environment variables is used to determine the current terminal type in Unix-based systems?**
- A) SHELL
- B) TERM
- C) USER
- D) EDITOR

**Answer:** B

---

**Q: In C programming, which function allows for dynamically changing the value of an existing environment variable?**
- A) getenv()
- B) setenv()
- C) unsetenv()
- D) addenv()

**Answer:** B

---

**Q: Which environment variable provides a list of all directories where libraries are searched before standard locations?**
- A) LIB_PATH
- B) TMPDIR
- C) LD_LIBRARY_PATH
- D) PATH

**Answer:** C

---

**Q: In a Set-UID program, which environment variable, if not sanitized, can potentially be exploited by an attacker to load malicious code?**
- A) PATH
- B) USER
- C) LD_PRELOAD
- D) SHELL

**Answer:** C

---

**Q: Which command can be used to list all environment variables and their values in a Unix-based terminal?**
- A) printenv
- B) env -a
- C) lsenv
- D) getenv

**Answer:** A

---

**Q: To remove an environment variable from the current session in a Linux shell, you would use which command?**
- A) removeenv VARIABLE
- B) del VARIABLE
- C) unset VARIABLE
- D) delete VARIABLE

**Answer:** C

---

**Q: Which environment variable commonly defines the name of the logged-in user in Unix-based systems?**
- A) HOME
- B) USER
- C) SHELL
- D) TERM

**Answer:** B

---

**Q: In Linux, if you want to temporarily add a directory to your `PATH`, which command would you use?**
- A) set PATH=$PATH:/new/directory
- B) PATH=$PATH:/new/directory export
- C) export PATH=$PATH:/new/directory
- D) env PATH=$PATH:/new/directory

**Answer:** C

---

**Q: What is the purpose of the `PWD` environment variable in a Unix-like system?**
- A) To set the shell prompt
- B) To store the present working directory
- C) To define the default editor
- D) To configure the user’s home directory

**Answer:** B

---

**Q: In a Linux system, where are user-specific environment variables typically set for a Bash session?**
- A) /etc/environment
- B) ~/.bashrc
- C) /etc/profile
- D) /var/log/env

**Answer:** B

---

**Q: In the context of environment variables, which of the following is true about the `PS1` variable?**
- A) It specifies the default text editor.
- B) It defines the shell prompt format.
- C) It sets the system language.
- D) It holds the current terminal type.

**Answer:** B

---

**Q: If you wanted to access an environment variable directly in a Bash script, which syntax would you use?**
- A) ${VARIABLE}
- B) $(VARIABLE)
- C) #[VARIABLE]
- D) &VARIABLE

**Answer:** A

---

**Q: Which function in C allows you to add a new environment variable to the process’s environment?**
- A) putenv()
- B) getenv()
- C) delenv()
- D) listenv()

**Answer:** A

---

**Q: In Linux, to make an environment variable `MYVAR` with a value `test` persistent across sessions, where should you add the export command?**
- A) /etc/hosts
- B) ~/.bashrc or ~/.profile
- C) /etc/shadow
- D) /var/log/messages

**Answer:** B

---

**Q: What would be the effect of setting the `PATH` variable to an empty string?**
- A) Only system commands will work.
- B) Only commands in the current directory will work.
- C) No external commands will be found.
- D) The terminal will close immediately.

**Answer:** C

---

**Q: Which environment variable is used to define which directory the shell should start in for each new session?**
- A) TERM
- B) HOME
- C) USER
- D) SHELL

**Answer:** B

---

**Q: In a C program, which environment variable function allows you to clear a specific variable for the duration of the program?**
- A) putenv()
- B) clearenv()
- C) unsetenv()
- D) getenv()

**Answer:** C

---

**Q: If the `SHELL` environment variable is set to `/bin/zsh`, what does this indicate?**
- A) The system default shell is Bash.
- B) The user is currently using the Zsh shell.
- C) All users must use the Zsh shell.
- D) The default text editor is Zsh.

**Answer:** B

---

**Q: Which of the following describes the primary function of the `TERM` environment variable?**
- A) Sets the login terminal for the user.
- B) Determines the type of terminal interface for formatting purposes.
- C) Specifies the encryption type used by the system.
- D) Holds the username of the current user.

**Answer:** B

---

**Q: In a Linux environment, if you want to set an environment variable for only one command execution, what syntax would you use?**
- A) VARIABLE=value command
- B) export VARIABLE=value command
- C) set VARIABLE=value command
- D) echo VARIABLE=value command

**Answer:** A

---

**Q: What does the `UID` environment variable represent in a Unix system?**
- A) The user’s home directory path
- B) The system’s unique identifier
- C) The user’s numerical ID for permissions
- D) The name of the current shell

**Answer:** C