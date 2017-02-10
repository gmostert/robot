package feature.robot;

import org.junit.runner.RunWith;

import cucumber.junit.Cucumber;

/**
 * Unit test to run cucumber definitions.
 * @author gmost
 *
 */
@RunWith(Cucumber.class)
@Cucumber.Options(format = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
tags = {"~@ignore"})
public class RobotTest {

}
