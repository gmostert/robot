Feature: Moving a robot on a table
 
 	
  Scenario: Give the robot commands before it has been placed
    Given a robot thats not placed at on a table
	When the robot is moved
	Then it gets a move warning message: Our brave little robot has not been placed on the table, it cant do anything yet :(
	When the robot is turned left
	Then it gets a move warning message: Our brave little robot has not been placed on the table, it cant do anything yet :(
	When the robot is turned right
	Then it gets a move warning message: Our brave little robot has not been placed on the table, it cant do anything yet :(
 
  Scenario: Move the robot around the table
    Given a robot thats placed at 0,0,NORTH on a table thats 5x5
	When the robot is moved
	Then its new location is 0,1,NORTH
	When the robot is moved
	Then its new location is 0,2,NORTH
	When the robot is turned right
	Then its new location is 0,2,EAST
	When the robot is moved
	Then its new location is 1,2,EAST
	When the robot is turned right
	Then its new location is 1,2,SOUTH
	When the robot is moved
	Then its new location is 1,1,SOUTH
	When the robot is turned right
	Then its new location is 1,1,WEST
	When the robot is moved
	Then its new location is 0,1,WEST
	
  Scenario: Turn the robot 360 degrees around one spot on the table
    Given a robot thats placed at 0,0,NORTH on a table thats 5x5
	When the robot is turned left
	Then its new location is 0,0,WEST
	When the robot is turned left
	Then its new location is 0,0,SOUTH
	When the robot is turned left
	Then its new location is 0,0,EAST
	When the robot is turned left
	Then its new location is 0,0,NORTH
	When the robot is turned right
	Then its new location is 0,0,EAST
	When the robot is turned right
	Then its new location is 0,0,SOUTH
	When the robot is turned right
	Then its new location is 0,0,WEST
	When the robot is turned right
	Then its new location is 0,0,NORTH
	
  Scenario: Try and move the robot off the table and continue with other valid movements after
    Given a robot thats placed at 0,4,NORTH on a table thats 5x5
	When the robot is moved
	Then it gets a move warning message: Cant do that I'm afraid, our brave little robot will fall of the table :(
	Then its new location is 0,4,NORTH
	When the robot is turned right
	Then its new location is 0,4,EAST
	When the robot is moved
	Then its new location is 1,4,EAST