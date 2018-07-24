<%-- 
    Document   : home
    Created on : Jul 9, 2017, 10:16:55 PM
    Author     : Computer
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page import="Model.SinhVien"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <title>Trang Chủ</title>
    </head>
    <body>
        <div class="font">
        <font>Welcome, ${sessionScope.USER} !</font>
        </div>
        <div class="wrapper">
            <h1>MVC Model - Quản Lý Sinh Viên</h1>
            <%
                String chucnang = request.getParameter("chucnang");
                if (chucnang == null) {
            %>

            <table border="1">
                <tr>
                    <th>Mã Sinh Viên</th>
                    <th>Tên Sinh Viên</th>
                    <th>Lớp</th>
                    <th>Ngành Học</th>
                    <th colspan="2"><a href="home.jsp?chucnang=Them">Thêm</a></th>
                </tr>
                <%
                    SinhVien sv = new SinhVien();
                    List<SinhVien> ds = sv.show();
                    for (int i = 0; i < ds.size(); i++) {
                %>
                <tr>
                    <td><%= ds.get(i).getMasv()%></td>
                    <td><%= ds.get(i).getTensv()%></td>
                    <td><%= ds.get(i).getLop()%></td>
                    <td><%= ds.get(i).getNganhhoc()%></td>
                    <c:url value="home.jsp" var="link">
                        <c:param name="masv" value="<%= ds.get(i).getMasv()%>"></c:param>
                        <c:param name="tensv" value="<%= ds.get(i).getTensv()%>"></c:param>
                        <c:param name="lop" value="<%= ds.get(i).getLop()%>"></c:param>
                        <c:param name="nganhhoc" value="<%= ds.get(i).getNganhhoc()%>"></c:param>
                    </c:url>
                    <td><a href="<c:out value="${link}"></c:out>&chucnang=Sua">Sửa</a></td>
                    <td><a href="Controller?action=Xoa&masv=<%= ds.get(i).getMasv()%>">Xóa</a></td>
                </tr>
                <%
                    }
                %>
            </table>

            <%
            } else if (chucnang.equals("Sua")) {
            %>
            <form name="fSua" action="Controller" method="get" onsubmit="return fValid1()">
                Mã Sinh Viên : <input type="text" name="masv" value="<%= request.getParameter("masv")%>" /><br /><br />
                Tên Sinh Viên : <input type="text" name="tensv" value="<%= request.getParameter("tensv")%>" /><br /><br />
                Lớp : <input type="text" name="lop" value="<%= request.getParameter("lop")%>" /><br /><br />
                Ngành Học : <input type="text" name="nganhhoc" value="<%= request.getParameter("nganhhoc")%>" /><br /><br />
                <input type="submit" name="action" value="Sửa" />
            </form>
            <%} else if (chucnang.equals("Them")) {%>
            <form name="fThem" action="Controller" method="get" onsubmit="return fValid()">
                Mã Sinh Viên : <input type="text" name="masv" value="" /><br /><br />
                Tên Sinh Viên : <input type="text" name="tensv" value="" /><br /><br />
                Lớp : <input type="text" name="lop" value="" /><br /><br />
                Ngành Học : <input type="text" name="nganhhoc" value="" /><br /><br />
                <input type="submit" name="action" value="Thêm" />
            </form>
            <%
                }
            %>

        </div>
    </body>
</html>
<script>
    function fValid() {
        if (fThem.masv.value === "") {
            alert("'Mã Sinh Viên' không được để trống !");
            fThem.masv.focus();
            return false;
        }
        if (fThem.tensv.value === "") {
            alert("'Tên Sinh Viên' không được để trống !");
            fThem.tensv.focus();
            return false;
        }
        if (fThem.lop.value === "") {
            alert("'Lớp' không được để trống !");
            fThem.lop.focus();
            return false;
        }
        if (fThem.nganhhoc.value === "") {
            alert("'Ngành Học' không được để trống !");
            fThem.nganhhoc.focus();
            return false;
        }
    }
    function fValid1() {
        if (fSua.masv.value === "") {
            alert("'Mã Sinh Viên' không được để trống !");
            fSua.masv.focus();
            return false;
        }
        if (fSua.tensv.value === "") {
            alert("'Tên Sinh Viên' không được để trống !");
            fSua.tensv.focus();
            return false;
        }
        if (fSua.lop.value === "") {
            alert("'Lớp' không được để trống !");
            fSua.lop.focus();
            return false;
        }
        if (fSua.nganhhoc.value === "") {
            alert("'Ngành Học' không được để trống !");
            fSua.nganhhoc.focus();
            return false;
        }
    }
</script>