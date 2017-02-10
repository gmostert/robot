package gerhard.mostert.robot.domain;

/**
 * This is the table where the Robot moves on. It determines the size of the overall grid that the Robot can move.
 * 
 * @author gmost
 *
 */
public class Table {
	
	private int width;
	private int height;
	
	/**
	 * The default table is set to a grid of 5x5.
	 */
	public Table() {
		width = 5;
		height = 5;
	}
	
	/**
	 * Create a table with a specified grid size
	 * 
	 * @param width The width of the table, determines how many x positions the is.
	 * @param height The height of the table, determines how many y positions the is.
	 */
	public Table(int width, int height) {
		this.width = width;
		this.height = height;
	}
	
	public int getWidth() {
		return width;
	}
	
	public void setWidth(int width) {
		this.width = width;
	}
	
	public int getHeight() {
		return height;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
}
