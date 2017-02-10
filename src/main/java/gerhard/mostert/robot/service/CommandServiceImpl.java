package gerhard.mostert.robot.service;

import gerhard.mostert.robot.domain.Command;
import gerhard.mostert.robot.domain.Face;
import gerhard.mostert.robot.domain.Placement;

/**
 * This is the implementation class of the <code>CommandService</code>
 * 
 * @author gmost
 *
 */
public class CommandServiceImpl implements CommandService {

	public Command getCommand(String input) throws IllegalArgumentException {
		if (input.toUpperCase().contains(Command.PLACE.getText())) {
			return Command.PLACE;
		} else if (input.equalsIgnoreCase(Command.MOVE.getText())) {
			return Command.MOVE;
		} else if (input.equalsIgnoreCase(Command.RIGHT.getText())) {
			return Command.RIGHT;
		} else if (input.equalsIgnoreCase(Command.LEFT.getText())) {
			return Command.LEFT;
		} else if (input.equalsIgnoreCase(Command.REPORT.getText())) {
			return Command.REPORT;
		} else {
			throw new IllegalArgumentException("Unsupported command");
		}
	}
	
	public Placement getPlacement(String input) throws IllegalArgumentException {
		try {
			Placement placement = new Placement();
			String[] inputs = input.split(",");
			placement.setX(Integer.parseInt(inputs[0]));
			placement.setY(Integer.parseInt(inputs[1]));
			placement.setFace(Face.fromString(inputs[2]));
			return placement;
		} catch (Exception e) {
			throw new IllegalArgumentException("Could not determine where to place the robot");
		}
	}
}
