package feature.robot;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertThat;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import gerhard.mostert.robot.domain.Command;
import gerhard.mostert.robot.service.CommandService;
import gerhard.mostert.robot.service.CommandServiceImpl;

public class UserCommands {
	
	private CommandService commandService;
	private Command command;
	private String warningMessage;
	
	@Given("^the command service$")
	public void newRobotNotOnTable() {
		commandService = new CommandServiceImpl();
	}
	
	
	@When("^the user types (.*)$")
	public void commandIssued(final String input) {
		try {
			command = commandService.getCommand(input);
		} catch (IllegalArgumentException ex) {
			warningMessage = ex.getMessage();
		}
	}
 
	@Then("^it should be resolved to the (.*) command$")
	public void commandResolved(final String supportedCommand) {
		assertThat(command.getText(), is(supportedCommand));
	}
	
	@Then("^it gives a command warning message: (.*)$")
	public void robotWarningMessage(final String message) {
		assertThat(warningMessage, is(message));
	}

}
