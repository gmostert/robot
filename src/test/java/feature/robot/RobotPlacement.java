package feature.robot;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import gerhard.mostert.robot.domain.Face;
import gerhard.mostert.robot.domain.Robot;
import gerhard.mostert.robot.domain.Table;
import gerhard.mostert.robot.service.RobotService;
import gerhard.mostert.robot.service.RobotServiceImpl;

public class RobotPlacement {
	
	private RobotService robotService = new RobotServiceImpl();
	private Robot robot;
	private Table table;
	private String warningMessage;
	
	@Given("^a robot and a table thats (.*)x(.*)$")
	public void newRobot(final int width, final int height) {
		robot = new Robot();
		table = new Table(width, height);
	}
	
	@When("^the robot is placed at (.*)$")
	public void robotPlaced(final String position) {
		String[] place = position.split(",");
		robot = robotService.place(robot, table, Integer.parseInt(place[0]), Integer.parseInt(place[1]), Face.fromString(place[2]));
	}
 
	@Then("^it should be at (.*)$")
	public void robotReportAfterPlaced(final String position) {
		assertThat(robotService.report(robot), is(position));
	}
	
	@When("^the robot is placed again this time at (.*)$")
	public void robotPlacedAgain(final String position) {
		String[] place = position.split(",");
		robot = robotService.place(robot, table, Integer.parseInt(place[0]), Integer.parseInt(place[1]), Face.fromString(place[2]));
	}
	
	@When("^the robot is placed outside the grid on the table (.*)$")
	public void robotPlacedAtInvalidLocation(final String position) {
		String[] place = position.split(",");
		try {
			robot = robotService.place(robot, table, Integer.parseInt(place[0]), Integer.parseInt(place[1]), Face.fromString(place[2]));
		} catch (IllegalArgumentException ex) {
			warningMessage = ex.getMessage();
		}
	}
	
	@Then("^it gets a placement warning message: (.*)$")
	public void robotWarningMessage(final String message) {
		assertThat(warningMessage, is(message));
	}

}
