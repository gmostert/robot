package gerhard.mostert.robot.domain;

/**
 * This is the Robot that gets moved around the table. 
 * It contains all the coordinates of its current position along with the direction its facing on he table.
 * 
 * @author gmost
 *
 */
public class Robot {
	private int x;
	private int y;
	private Face face;
	
	public Robot() {
		x = -1;
		y = -1;
	}
	
	public int getX() {
		return x;
	}
	
	public void setX(int x) {
		this.x = x;
	}
	
	public int getY() {
		return y;
	}
	
	public void setY(int y) {
		this.y = y;
	}
	
	public Face getFace() {
		return face;
	}
	
	public void setFace(Face face) {
		this.face = face;
	}
}
