package gerhard.mostert.robot.service;

import gerhard.mostert.robot.domain.Command;
import gerhard.mostert.robot.domain.Placement;

/**
 * This is a helper service to deal with user input.
 * 
 * @author gmost
 *
 */
public interface CommandService {
	
	/**
	 * Get the actual command to be executed from a user input string
	 * 
	 * @param input The user input
	 * @return The command enum
	 * @throws IllegalArgumentException When no valid command is recognised
	 */
	Command getCommand(String input) throws IllegalArgumentException;
	
	/**
	 * Get the coordinates and direction for placing the robot from the user input
	 * 
	 * @param input The user input
	 * @return The placement object
	 * @throws IllegalArgumentException When one of the params isnt valid
	 */
	Placement getPlacement(String input) throws IllegalArgumentException;
	
}
