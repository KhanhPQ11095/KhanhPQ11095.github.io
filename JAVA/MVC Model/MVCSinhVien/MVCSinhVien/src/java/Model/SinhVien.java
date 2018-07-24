/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Computer
 */
public class SinhVien {

    private String masv;
    private String tensv;
    private String lop;
    private String nganhhoc;

    public SinhVien() {
    }

    public SinhVien(String masv, String tensv, String lop, String nganhhoc) {
        this.masv = masv;
        this.tensv = tensv;
        this.lop = lop;
        this.nganhhoc = nganhhoc;
    }

    /**
     * @return the masv
     */
    public String getMasv() {
        return masv;
    }

    /**
     * @param masv the masv to set
     */
    public void setMasv(String masv) {
        this.masv = masv;
    }

    /**
     * @return the tensv
     */
    public String getTensv() {
        return tensv;
    }

    /**
     * @param tensv the tensv to set
     */
    public void setTensv(String tensv) {
        this.tensv = tensv;
    }

    /**
     * @return the lop
     */
    public String getLop() {
        return lop;
    }

    /**
     * @param lop the lop to set
     */
    public void setLop(String lop) {
        this.lop = lop;
    }

    /**
     * @return the nganhhoc
     */
    public String getNganhhoc() {
        return nganhhoc;
    }

    /**
     * @param nganhhoc the nganhhoc to set
     */
    public void setNganhhoc(String nganhhoc) {
        this.nganhhoc = nganhhoc;
    }

    public boolean checkLogin(String username, String password) {

        Connection con = null;

        try {

            Connected data = new Connected();
            con = data.getConnect();

            String sql = "Select * From Registration Where username = ? and password = ?";
            PreparedStatement stm = con.prepareStatement(sql);
            stm.setString(1, username);
            stm.setString(2, password);
            ResultSet rs = stm.executeQuery();

            boolean result = rs.next();
            rs.close();
            stm.close();
            con.close();
            if (result) {
                return true;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;

    }

    public List<SinhVien> show() {

        Connection con = null;
        List<SinhVien> ds = new ArrayList<>();
        int size = 0;

        try {

            Connected data = new Connected();
            con = data.getConnect();
            String sql = "Select * From SinhVien";
            Statement stm = con.createStatement();
            ResultSet rs = stm.executeQuery(sql);

            while (rs.next()) {
                SinhVien sv = new SinhVien();
                sv.setMasv(rs.getString("Ma_SinhVien"));
                sv.setTensv(rs.getString("Ten_SinhVien"));
                sv.setLop(rs.getString("Lop"));
                sv.setNganhhoc(rs.getString("NganhHoc"));
                ds.add(sv);
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return ds;
    }

    public boolean delete(String masv) {

        Connection con = null;

        try {

            Connected data = new Connected();
            con = data.getConnect();
            String sql = "Delete SinhVien Where Ma_SinhVien=?";
            PreparedStatement stm = con.prepareStatement(sql);
            stm.setString(1, masv);
            int result = stm.executeUpdate();

            if (result > 0) {
                System.out.println(result);
                return true;
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return false;

    }

    public boolean update(String masv, String tensv, String lop, String nganhhoc) {

        Connection con = null;

        try {

            Connected data = new Connected();
            con = data.getConnect();
            String sql = "Update SinhVien Set Ten_SinhVien=?, Lop=?, NganhHoc=? Where Ma_SinhVien=?";
            PreparedStatement stm = con.prepareStatement(sql);
            stm.setString(1, tensv);
            stm.setString(2, lop);
            stm.setString(3, nganhhoc);
            stm.setString(4, masv);
            int result = stm.executeUpdate();

            if (result > 0) {
                return true;
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return false;

    }

    public boolean insert(String masv, String tensv, String lop, String nganhhoc) {

        Connection con = null;

        try {

            Connected data = new Connected();
            con = data.getConnect();

            String sql = "Insert Into SinhVien(Ma_SinhVien, Ten_SinhVien, Lop, NganhHoc) Values(?,?,?,?)";
            PreparedStatement stm = con.prepareStatement(sql);
            List<SinhVien> ds = new SinhVien().show();
            stm.setString(1, masv);
            stm.setString(2, tensv);
            stm.setString(3, lop);
            stm.setString(4, nganhhoc);
            int result = stm.executeUpdate();

            if (result > 0) {
                return true;
            }

        } catch (Exception ex) {
            ex.printStackTrace();
        }

        return false;

    }

}
