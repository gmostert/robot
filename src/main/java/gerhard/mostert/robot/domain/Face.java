package gerhard.mostert.robot.domain;

/**
 * This enum contains all the direction the Robot can face on the table.
 * 
 * @author gmost
 *
 */
public enum Face {
	NORTH("NORTH"), SOUTH("SOUTH"), EAST("EAST"), WEST("WEST");

	private String text;

	Face(String text) {
		this.text = text;
	}

	public String getText() {
		return this.text;
	}

	/**
	 * Get the enum matching the specified text. 
	 * 
	 * @param text String to find enum for.
	 * @return The matching <code>Face</code> enum
	 */
	public static Face fromString(String text) {
		if (text != null) {
			for (Face f : Face.values()) {
				if (text.equalsIgnoreCase(f.text)) {
					return f;
				}
			}
		}
		return null;
	}
}
