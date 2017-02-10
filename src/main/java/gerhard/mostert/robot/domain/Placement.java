package gerhard.mostert.robot.domain;

/**
 * Groups all the coordiantes and direction for a move together.
 * 
 * @author gmost
 *
 */
public class Placement {
	
	private int x;
	private int y;
	private Face face;
	
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
