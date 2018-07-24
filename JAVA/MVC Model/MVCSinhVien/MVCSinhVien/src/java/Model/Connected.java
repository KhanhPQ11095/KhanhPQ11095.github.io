package Model;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Administrator
 */
public class Connected {

    public Connection getConnect() {

        Connection con = null;

        try {

            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            String url = "jdbc:sqlserver://localhost:1433;databaseName=MVC_SinhVien;instanceName=PC300";
            con = DriverManager.getConnection(url, "sa", "123");

        } catch (Exception ex) {

            System.out.println(ex);
        }

        return con;

    }
}
