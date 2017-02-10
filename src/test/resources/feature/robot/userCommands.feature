Feature: Resolving the user input to supported commands
 
 	
  Scenario: Supported commands
    Given the command service
	When the user types PLACE
	Then it should be resolved to the PLACE command
	When the user types MOVE
	Then it should be resolved to the MOVE command
	When the user types RIGHT
	Then it should be resolved to the RIGHT command
	When the user types LEFT
	Then it should be resolved to the LEFT command
	When the user types REPORT
	Then it should be resolved to the REPORT command
	
  Scenario: Supported commands that does not match case exactly
    Given the command service
	When the user types place
	Then it should be resolved to the PLACE command
	When the user types move
	Then it should be resolved to the MOVE command
	When the user types right
	Then it should be resolved to the RIGHT command
	When the user types left
	Then it should be resolved to the LEFT command
	When the user types report
	Then it should be resolved to the REPORT command
	
  Scenario: Unsupported command
    Given the command service
	When the user types TEST
	Then it gives a command warning message: Unsupported command