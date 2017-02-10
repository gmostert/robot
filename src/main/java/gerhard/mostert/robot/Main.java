package gerhard.mostert.robot;

import java.util.Scanner;

import gerhard.mostert.robot.domain.Command;
import gerhard.mostert.robot.domain.Placement;
import gerhard.mostert.robot.domain.Robot;
import gerhard.mostert.robot.domain.Table;
import gerhard.mostert.robot.service.CommandService;
import gerhard.mostert.robot.service.CommandServiceImpl;
import gerhard.mostert.robot.service.RobotService;
import gerhard.mostert.robot.service.RobotServiceImpl;

/**
 * Main class to run the app
 * 
 * @author gmost
 *
 */
public class Main {
	
	private CommandService commandService = new CommandServiceImpl();
	private RobotService robotService = new RobotServiceImpl();

	/**
	 * 
	 * @param args Two arguments are supported, the first is for the width of the table, the second for the height
	 */
	public static void main(String[] args) {
		new Main(args);
	}
	
	public Main(String[] args) {
		System.out.println("Start your adventure by placing the robot on the table:");
		Robot robot = new Robot();
		Table table = createTable(args);
		Placement placement = null;
		Scanner scanner = new Scanner(System.in);
		
	    while(scanner.hasNext()) {
	    	try {
	    		Command command = commandService.getCommand(scanner.next());
		    	switch (command) {
		    		case PLACE: {
		    			placement = commandService.getPlacement(scanner.next()); //Immediately get next value with contains the params for the PLACE command
						robot = robotService.place(robot, table, placement.getX(), placement.getY(), placement.getFace());
						break;
		    		}
		    		case MOVE: {
		    			robot = robotService.move(robot, table);
		    			break;
		    		}
					case RIGHT: {
						robot = robotService.right(robot, table);
						break;
					}
					case LEFT: {
						robot = robotService.left(robot, table);
						break;
					}
					case REPORT: {
						System.out.println(robotService.report(robot));
						break;
					}
		    	}
	    	} catch (NumberFormatException e) {
				System.out.println(e.getMessage());
			} catch (IllegalArgumentException e) {
				System.out.println(e.getMessage());
			}
        }
	    System.out.println("Your adventure has come to an end.");
	    scanner.close();
	}
	
	private Table createTable(String[] args) {
		Table table = new Table();
		try {
			if (args != null && args.length > 0) {
				table.setWidth(Integer.parseInt(args[0]));
				table.setHeight(Integer.parseInt(args[1]));
			}
		} catch (Exception e) {
			System.out.println("Cant set tabel size: " + e.getMessage());
		}
		return table;
	}

}
