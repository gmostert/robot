Feature: Placing a robot on a table
 
  Scenario: Place a robot at various locations on the table
    Given a robot and a table thats 5x5
	When the robot is placed at 0,0,NORTH
	Then it should be at 0,0,NORTH
	When the robot is placed again this time at 1,1,NORTH
	Then it should be at 1,1,NORTH
	When the robot is placed outside the grid on the table 10,10,NORTH
	Then it gets a placement warning message: Cant place robot at: 10,10,NORTH
	Then it should be at 1,1,NORTH