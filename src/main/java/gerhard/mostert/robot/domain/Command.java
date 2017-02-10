package gerhard.mostert.robot.domain;

/**
 * An enum containing all the supported commands.
 * 
 * @author gmost
 *
 */
public enum Command {
	PLACE("PLACE"), MOVE("MOVE"), LEFT("LEFT"), RIGHT("RIGHT"), REPORT("REPORT");

	private String text;

	Command(String text) {
		this.text = text;
	}

	public String getText() {
		return this.text;
	}

	/**
	 * Get the enum matching the specified text. 
	 * 
	 * @param text String to find enum for.
	 * @return The matching <code>Commands</code> enum
	 */
	public static Command fromString(String text) {
		if (text != null) {
			for (Command c : Command.values()) {
				if (text.equalsIgnoreCase(c.text)) {
					return c;
				}
			}
		}
		return null;
	}
}
