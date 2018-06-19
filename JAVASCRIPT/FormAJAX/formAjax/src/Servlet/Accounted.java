package Servlet;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class Accounted{
	
	public boolean insertTK(String user, String pass, String email, String birD) {
		Connection con = null;
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			String url = "jdbc:sqlserver://formAjax.mssql.somee.com;databaseName=formAjax";
			con = DriverManager.getConnection(url, "KhanhPQ110_SQLLogin_1", "5efkxscgl2");
			String sql = "Insert into Accounts values(?,?,?,?)";
			PreparedStatement stm = con.prepareStatement(sql);
			stm.setString(1, user);
			stm.setString(2, pass);
			stm.setString(3, email);
			stm.setString(4, birD);
			int result = stm.executeUpdate();
			if (result >0 ) {
				return true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
		
	}
//	public static void main(String[]args) {
//		Accounted main = new Accounted();
//		boolean result= main.insertTK("admin001", "123123123", "admin@hotmail.com", "1/1/2018");
//		System.out.println(result);
//	}
}
