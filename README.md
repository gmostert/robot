# robot
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
	
## Run

The app is run using the robot-jar-with-dependencies.jar file (or by running the Main.java file from your IDE):

	java -jar robot-jar-with-dependencies.jar

It shows a start message on the command line

	Start your adventure by placing the robot on the table:
	
After which you can enter any of the supported commands: PLACE/MOVE/LEFT/RIGHT/REPORT
This process can then be repeated to navigate the robot around the table.
Any unsupported commands or illegal moves are displayed back to the user via the command line.

Optionally two arguments can be passed when launching the app to override the table size:

	java -jar robot-jar-with-dependencies.jar 10 10

## Build

The project is build with maven, either via the command line (or your IDE's build tool):

	mvn clean package
	
## Test

The unit tests can be run using maven (or your IDE's build in JUnit plugin):

	mvn test
	
As part of the unit tests a JaCoCo report is drawn up to show the test coverage, which can be found at:

	target/site/index.html
	
The test is written using cucumber with a behavioural driven approach. It allows setting up known scenarios/limitations 
and ensuring the app behaves accordingly.
	
## Contributers

Gerhard Mostert