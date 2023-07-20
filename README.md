<!-- Output copied to clipboard! -->

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.824 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Wed Jul 05 2023 15:27:28 GMT-0700 (PDT)
* Source doc: Copy of Internship Project Setup and Details
----->



# Security Policy Management System


## Tools Required



* Homebrew
* Java 8
* Maven 
* Editor (Spring Tool Suite 4)
* MySQL
* MySQL Workbench


## Download and Installation Steps 

NOTE : Install these tools in this particular order.


### Homebrew

The first thing to install is homebrew. Go to [https://brew.sh/](https://brew.sh/)

	/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Copy the command and run on the terminal. Follow the steps as prompted during the installation and wait for it to complete.
To check if the installation is completed run the command “_brew -v_” (this will display the version if the setup is successful, else you will get command not found)

NOTE : On Mac with Intel chip brew is installed in /usr/local/ directory whereas on Mac with M1 chip it is installed in /opt/ directory.


### Java 

We will install java using brew.
On the terminal run the following command :

  * _brew tap adoptopenjdk/openjdk_
  * _brew search adoptopenjdk_ (you will be able to see all the versions of adoptopenjdk)
  * _brew install adoptopenjdk8_ (or) _brew install adoptopenjdk@8_

(follow the prompts shown on the terminal, as these will help in creating links, setting path and JAVA_HOME, exporting the compiler and other required settings needed to use java)
Upon the completion of these steps we should have Java8 installed.
To verify the installation was successful or not, run the command : _java -version_

After all this is done, check if the Java Path is set in the ~/.zprofile file  

(use cat ~/.zprofile)
There should be an entry as :
export JAVA_HOME="/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home"

PATH="${JAVA_HOME}/bin:$PATH"

If you do not see these entries, you need to add them and restart the terminal and check \
_echo $JAVA_HOME_ (should show /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home)

_java -version_


### Maven

Maven is the project-management and build tool that we will be using. We can install maven using homebrew or directly from the apache site.
    
Using Homebrew :
		
    _brew install maven _(or) _brew install maven@3.6  
    (to install particular version use version no. after @)

Directly from the Apache Website : 
Download from : [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)
Installation Steps are given in : [https://maven.apache.org/install.html](https://maven.apache.org/install.html)

After completing this we need to set the Maven_Home path in ~/.zprofile
export MAVEN_HOME="/usr/local/apache-maven-3.6.3" 

PATH="${JAVA_HOME}/bin:${MAVEN_HOME}/bin:$PATH”

NOTE : Please change the paths based on where you download Maven.


### Spring Tool Suite 

It is the one of the editors that we can use when working with Java Projects.
Refer the following for downloading and installing Spring Tool Suite :

[https://www.codejava.net/frameworks/spring/install-spring-tool-suite-on-macos](https://www.codejava.net/frameworks/spring/install-spring-tool-suite-on-macos)


### MySQL and MySQLWorkbench

We will be using MySQL as the database for the Project.
Refer to the following for downloading and setting up MySQL on your system:
[https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html](https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html)

MySQL workbench is a database visualization tool. We will use this to view and query the table involved in the project.

Refer to the following video for MySQL Workbench installation : 
[https://www.youtube.com/watch?v=sY_QPWiIeDQ](https://www.youtube.com/watch?v=sY_QPWiIeDQ)
NOTE : Make sure you download the correct package based on your Operating System. \
		 For example on Mac with M1 chip the .dmg file will be of (ARM, 64-bit) and for 

Intel Chip it is will (x86, 64-bit)

## Project Description

The Project is a Security Management Policy System built using Spring Boot and Thymeleaf. As a part of this project we need to have

* User Management to register and login users.
* 3-4 different Policies with Create, Read, Update and Delete (CRUD) operations.

As a reference to understand the basics of Spring Boot and Thymeleaf and their connectivity with MySQL, you can go through the following project for Employee Management System : 

[https://www.javaguides.net/2021/07/spring-boot-tutorial-build-employee-management-project.html](https://www.javaguides.net/2021/07/spring-boot-tutorial-build-employee-management-project.html)

NOTE : There is also a series of YouTube videos for hands-on of the above project.

Example policies that can be used along with the fields they could include : 



1. Firewall Policy 
    * Rule Name 
    * Rule Status - indicate whether the rule is Enabled or Disabled
    * Rule Label - this can be like a description of the rule
    * Department - can have some predefined values like Engineering, Administration, HR etc.
2. DLP Policy
    * Rule Name
    * Rule Status - indicate whether the rule is Enabled or Disabled
    * Rule Label - this can be like a description of the rule
    * DLP Engine - this would basically indicate the type of data we are preventing from going over the network like HIPAA, Credit Card Network, Cyber Bullying, Offensive Language etc.
    * File Types - this would indicate the type of file in which we need to search for the data, for example Database Files, Images, Microsoft Office Files, Executables etc.

         

3. Malware Protection Policy
    * Inspect Inbound Traffic 
    * Inspect Outbound Traffic 
    * Inspect HTTP
    * Inspect FTP 

All of these fields could be like an ON/OFF switch to indicate if these traffic need to be inspected or not.

4. Mobile Malware Protection Policy 
    * Known Vulnerabilities
    * Unencrypted User Credentials
    * Personally Identifiable Information 
    * Location Information

All of these fields could be like an ALLOW/BLOCK switch to indicate if such data being passed to the network must be allowed or blocked.


Sample Snapshots : 

NOTE : Steps to run the Project
  Open a terminal window at the project folder and run the maven command
	
	   mvn spring-boot:run 

  If this does not work you need to configure Spring Tool Suite to use your installed maven instead of the embedded one it uses. If you are not able to configure maven then you can use the embedded maven and run the project by \

	  ./mvnw spring-boot:run
