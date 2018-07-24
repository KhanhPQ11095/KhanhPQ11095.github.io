/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controller;

import Model.SinhVien;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Computer
 */
@WebServlet(name = "Controller", urlPatterns = {"/Controller"})
public class Controller extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {

            String action = request.getParameter("action");

            if (action.equals("Login")) {
                String username = request.getParameter("txtUsername");
                String password = request.getParameter("txtPass");
                SinhVien login = new SinhVien();
                boolean result = login.checkLogin(username, password);
                String url = "fail.jsp";

                if (result) {
                    HttpSession session = request.getSession(true);
                    session.setAttribute("USER", username);
                    url = "home.jsp";
                }

                RequestDispatcher rd = request.getRequestDispatcher(url);
                rd.forward(request, response);

            } else if (action.equals("tryAgain")) {
                RequestDispatcher rd = request.getRequestDispatcher("index.jsp");
                rd.forward(request, response);

            } else if (action.equals("Xoa")) {
                String masv = request.getParameter("masv");

                SinhVien sv = new SinhVien();
                boolean result = sv.delete(masv);
                if (result) {
                    request.getRequestDispatcher("home.jsp").forward(request, response);
                }

            } else if (action.equals("Sửa")) {
                out.println(action);
                String masv = request.getParameter("masv");
                String tensv = request.getParameter("tensv");
                String lop = request.getParameter("lop");
                String nganhhoc = request.getParameter("nganhhoc");

                SinhVien sv = new SinhVien();
                boolean result = sv.update(masv, tensv, lop, nganhhoc);
                if (result) {
                    request.getRequestDispatcher("home.jsp").forward(request, response);
                }

            } else if (action.equals("Thêm")) {
                String masv = request.getParameter("masv");
                String tensv = request.getParameter("tensv");
                String lop = request.getParameter("lop");
                String nganhhoc = request.getParameter("nganhhoc");

                SinhVien sv = new SinhVien();
                boolean result = sv.insert(masv, tensv, lop, nganhhoc);
                if (result) {
                    request.getRequestDispatcher("home.jsp").forward(request, response);
                }

            }
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Controller</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Controller at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
