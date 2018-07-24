<%-- 
    Document   : index
    Created on : Jul 9, 2017, 10:16:55 PM
    Author     : Computer
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
        <title>Đăng Nhập</title>
    </head>
    <body>
        
        <div class="wrapper">
            <div class="container">
                <h1>Welcome</h1>

                <form class="form" name="fLogin" action="Controller" method="post" onsubmit="return fValid();">
                    <input type="text" name="txtUsername" value="" placeholder="Username">
                    <input type="password" name="txtPass" value="" placeholder="Password">
                    <button type="submit" name="action" id="login-button" value="Login" >Login</button>
                    <button type="reset" name="btReset" id="login-button" value="Reset" >Reset</button>
                </form>

            </div>

            <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    </body>
</html>
<script>
                    function fValid() {
                        if (fLogin.txtUsername.value === "") {
                            alert("'Username' không được để trống !");
                            fLogin.txtUsername.focus();
                            return false;
                        }
                        if (fLogin.txtPass.value === "") {
                            alert("Vui lòng nhập 'Password' !");
                            fLogin.txtPass.focus();
                            return false;
                        }
                    }
</script>