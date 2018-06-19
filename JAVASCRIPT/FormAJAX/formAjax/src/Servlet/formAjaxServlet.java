package Servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/formAjaxServlet")
public class formAjaxServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public formAjaxServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		try {
			Accounted main = new Accounted();
			// String action = request.getParameter("btn_submit");
			// if(action.equals("submit")) {
			// String user = request.getParameter("Username");
			// String pass = request.getParameter("Password");
			// String email = request.getParameter("Email");
			// String birD = request.getParameter("Bithday");

			boolean result = main.insertTK("admin001", "123123123", "admin@hotmail.com", "11/10/1995");
			if (result == false) {
				out.write("<span class='oK'>Tên Đã Được Sử Dụng!</span>");
			}
			if (result == true) {
				out.write("<span class='oK'>Đã Đăng Ký Thành Công!</span>");
			}
			// }
		} finally {
			out.close();
		}
	}
}
