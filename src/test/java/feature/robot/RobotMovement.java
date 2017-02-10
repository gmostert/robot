package feature.robot;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import gerhard.mostert.robot.domain.Placement;
import gerhard.mostert.robot.domain.Robot;
import gerhard.mostert.robot.domain.Table;
import gerhard.mostert.robot.service.CommandService;
import gerhard.mostert.robot.service.CommandServiceImpl;
import gerhard.mostert.robot.service.RobotService;
import gerhard.mostert.robot.service.RobotServiceImpl;

public class RobotMovement {
	
	private CommandService commandService = new CommandServiceImpl();
	private RobotService robotService = new RobotServiceImpl();
	private Robot robot;
	private Table table;
	private String warningMessage;
	
	@Given("^a robot thats not placed at on a table$")
	public void newRobotNotOnTable() {
		robot = new Robot();
		table = new Table();
	}
	
	@Given("^a robot thats placed at (.*) on a table thats (.*)x(.*)$")
	public void newRobotPlacedOnTable(final String placement, final int width, final int height) {
		robot = new Robot();
		table = new Table(width, height);
		Placement place = commandService.getPlacement(placement);
		robot = robotService.place(robot, table, place.getX(), place.getY(), place.getFace());
	}
	
	@When("^the robot is moved$")
	public void robotMove() {
		try {
			robot = robotService.move(robot, table);
		} catch (IllegalArgumentException ex) {
			warningMessage = ex.getMessage();
		}
	}
 
	@Then("^its new location is (.*)$")
	public void robotReportAfterMove(final String position) {
		assertThat(robotService.report(robot), is(position));
	}
	
	@When("^the robot is turned left$")
	public void robotTurnLeft() {
		try {
			robot = robotService.left(robot, table);
		} catch (IllegalArgumentException ex) {
			warningMessage = ex.getMessage();
		}
	}
	
	@When("^the robot is turned right$")
	public void robotTurnRight() {
		try {
			robot = robotService.right(robot, table);
		} catch (IllegalArgumentException ex) {
			warningMessage = ex.getMessage();
		}
	}
	
	@Then("^it gets a move warning message: (.*)$")
	public void robotWarningMessage(final String message) {
		assertThat(warningMessage, is(message));
	}
}
