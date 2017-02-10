package gerhard.mostert.robot.service;

import gerhard.mostert.robot.domain.Face;
import gerhard.mostert.robot.domain.Robot;
import gerhard.mostert.robot.domain.Table;

/**
 * The implementation class for the <code>RobotService</code>.
 * 
 * @author gmost
 *
 */
public class RobotServiceImpl implements RobotService {

	public Robot place(Robot robot, Table table, int x, int y, Face face) throws IllegalArgumentException {
		if (x < 0 || x >= table.getWidth() || y < 0 || y >= table.getHeight() || face == null) {
			throw new IllegalArgumentException("Cant place robot at: " + x + "," + y + "," + face);
		}
		
		robot.setX(x);
		robot.setY(y);
		robot.setFace(face);
		return robot;
	}

	public Robot move(Robot robot, Table table) throws IllegalStateException, IllegalArgumentException {
		hasRobotBeenPlaced(robot);
		switch (robot.getFace()) {
			case NORTH: {
				if (robot.getY() + 1 >= table.getHeight()) {
					createCantBePlacedThereException();
				}
				robot.setY(robot.getY() + 1);
				break;
			}
			case SOUTH: {
				if (robot.getY() - 1 < 0) {
					createCantBePlacedThereException();
				}
				robot.setY(robot.getY() - 1);
				break;
			}
			case EAST: {
				if (robot.getX() + 1 >= table.getWidth()) {
					createCantBePlacedThereException();
				}
				robot.setX(robot.getX() + 1);
				break;
			}
			case WEST: {
				if (robot.getX() - 1 < 0) {
					createCantBePlacedThereException();
				}
				robot.setX(robot.getX() - 1);
				break;
			}
		}
		return robot;
	}

	public Robot left(Robot robot, Table table) throws IllegalStateException {
		hasRobotBeenPlaced(robot);
		switch (robot.getFace()) {
			case NORTH: robot.setFace(Face.WEST); break;
			case SOUTH: robot.setFace(Face.EAST); break;
			case EAST: robot.setFace(Face.NORTH); break;
			case WEST: robot.setFace(Face.SOUTH); break;
		}
		return robot;
	}

	public Robot right(Robot robot, Table table) throws IllegalStateException {
		hasRobotBeenPlaced(robot);
		switch (robot.getFace()) {
			case NORTH: robot.setFace(Face.EAST); break;
			case SOUTH: robot.setFace(Face.WEST); break;
			case EAST: robot.setFace(Face.SOUTH); break;
			case WEST: robot.setFace(Face.NORTH); break;
		}
		return robot;
	}

	public String report(Robot robot) throws IllegalStateException {
		hasRobotBeenPlaced(robot);
		return robot.getX() + "," + robot.getY()  + "," + robot.getFace().toString();
	}
	
	private void hasRobotBeenPlaced(Robot robot) throws IllegalStateException {
		if (robot.getX() == -1 || robot.getY() == -1) {
			throw new IllegalArgumentException("Our brave little robot has not been placed on the table, it cant do anything yet :(");
		}
	}
	
	private IllegalArgumentException createCantBePlacedThereException() {
		throw new IllegalArgumentException("Cant do that I'm afraid, our brave little robot will fall of the table :(");
	}
	
}
