package gerhard.mostert.robot.service;

import gerhard.mostert.robot.domain.Face;
import gerhard.mostert.robot.domain.Robot;
import gerhard.mostert.robot.domain.Table;

/**
 * This service contains all the logic for moving a robot around on a table.
 * 
 * @author gmost
 *
 */
public interface RobotService {
	
	/**
	 * Place the robot on the table.
	 * 
	 * @param robot The specified robot to place.
	 * @param table The table to place it on.
	 * @param x The x coordinate to place the robot at (starting from the south west corner).
	 * @param y The y coordinate to place the robot at (starting from the south west corner).
	 * @param face The direction the robot should face.
	 * @return The updated robot as its stands on the table after its placed.
	 * @throws IllegalArgumentException This exception is thrown when the robot is placed outside the available grid space on the table 
	 * or facing an unknown direction.
	 */
	Robot place(Robot robot, Table table , int x, int y, Face face) throws IllegalArgumentException;
	
	/**
	 * Move the robot one grid space forward, in its currently facing direction.
	 * 
	 * @param robot The robot to move.
	 * @param table The table to move it on.
	 * @return The updated robot as its stands on the table after the move.
	 * @throws IllegalStateException This exception is thrown when the robot has not been placed on the table.
	 * @throws IllegalArgumentException This exception is thrown when the robot is moved outside the available grid space on the table.
	 */
	Robot move(Robot robot, Table table) throws IllegalStateException, IllegalArgumentException;
	
	/**
	 * Turn the robot one rotation towards its left.
	 * 
	 * @param robot The robot to turn.
	 * @param table The table to turn it on.
	 * @return
	 * @throws IllegalStateException This exception is thrown when the robot has not been placed on the table.
	 */
	Robot left(Robot robot, Table table) throws IllegalStateException;
	
	/**
	 * Turn the robot one rotation towards its right.
	 * 
	 * @param robot The robot to turn.
	 * @param table The table to turn it on.
	 * @return
	 * @throws IllegalStateException This exception is thrown when the robot has not been placed on the table.
	 */
	Robot right(Robot robot, Table table) throws IllegalStateException;
	
	/**
	 * Show what the current status of the robot is.
	 * 
	 * @param robot The robot to report on.
	 * @return A string containing the coordinates and direction the robot is facing on the table.
	 * @throws IllegalStateException This exception is thrown when the robot has not been placed on the table.
	 */
	String report(Robot robot) throws IllegalStateException;
}
