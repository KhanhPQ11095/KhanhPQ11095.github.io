package Model;

public class Account {
	private String user;
	private String pass;
	private String email;
	private String birD;
	
	public Account() {
		// TODO Auto-generated constructor stub
	}

	public Account(String user, String pass, String cpass, String email, String birD) {
		super();
		this.user = user;
		this.pass = pass;
		this.email = email;
		this.birD = birD;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBirD() {
		return birD;
	}

	public void setBirD(String birD) {
		this.birD = birD;
	}
	
}
