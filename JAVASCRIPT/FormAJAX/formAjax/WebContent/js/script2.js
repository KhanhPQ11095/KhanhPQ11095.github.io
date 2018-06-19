function validateForm() {
	var user = document.getElementById('Username').value;
	var pass = document.getElementById('Password').value;
	var cpass = document.getElementById('cPassword').value;
	var email = document.getElementById('Email').value;
	var birD = document.getElementById('Birthday').value;
// Array div id = show-*
	var nearby = new Array();
	nearby[0] = document.getElementById('show-username');
	nearby[1] = document.getElementById('show-password');
	nearby[2] = document.getElementById('show-cpassword');
	nearby[3] = document.getElementById('show-email');
	nearby[4] = document.getElementById('show-birthday');
// Check Username empty and  < 8
	if (user == '' || user.length < 8) {
		nearby[0].innerHTML = '<span>Vui lòng nhập Tên Tài Khoản và lớn hơn 8 ký tự</span>';
		return false;
	}
	nearby[0].innerHTML = '<span class="oK">OK!</span>';
// Check Password empty and  < 8
	if (pass == '' || pass.length < 8) {
		nearby[1].innerHTML = '<span>Vui lòng nhập Mật Khẩu và lớn hơn 8 ký tự</span>';
		return false;
	}
	nearby[1].innerHTML = '<span class="oK">OK!</span>';
// Check CPassword empty and  < 8
	if (cpass == '' || cpass.length < 8) {
		nearby[2].innerHTML = '<span>Vui lòng nhập Mật Khẩu xác nhận và lớn hơn 8 ký tự</span>';
		return false;
	} 
// Check CPassword !== Password
	if (cpass !== pass) {
		nearby[2].innerHTML = '<span>Mật Khẩu xác nhận không đúng</span>';
		return false;
	}
	nearby[2].innerHTML = '<span class="oK">OK!</span>';
// Check Email
	var filter = /^([a-zA-Z0-9_\.\-]{5,32})+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 

	if (email == '') {
		nearby[3].innerHTML = '<span>Vui lòng nhập Email</span>';
		return false;
		
	}
	if (!filter.test(email)) {
		nearby[3].innerHTML = '<span>Email phải có kí tự "@", dấu "." sau "@"<br>Example@hotmail.com</span>';
		return false;
	}
	nearby[3].innerHTML = '<span class="oK">OK!</span>';
// Check Birthday
	var dateformat = /^(([1-9]|[12][0-9]|3[01])(\/)([13578]|1[02]))|(([1-9]|[12][0-9])(\/)(02))|(([1-9]|[12][0-9]|3[0])(\/)([469]|11))(\/)\d{4}$/;
	if (birD == '') {
		nearby[4].innerHTML = '<span>Vui lòng chọn Birthday "<=" ngày hiện tại</span>';
		return false;
	}
	if (!dateformat.test(birD)) {
		nearby[4].innerHTML = '<span>Hãy nhập Birthday hợp lệ.<br>Example: 11/10/1995</span>';
		return false;
	}
	nearby[4].innerHTML = '<span class="oK">OK!</span>';
	
	makeRequest();
	return false;
}

function resetForm() {
	document.getElementById("Username").value = "";
	document.getElementById("Password").value = "";
	document.getElementById("cPassword").value = "";
	document.getElementById("Email").value = "";
	document.getElementById("Birthday").value = "";
	
	document.getElementById("show-username").innerHTML = "";
	document.getElementById("show-password").innerHTML = "";
	document.getElementById("show-cpassword").innerHTML = "";
	document.getElementById("show-email").innerHTML = "";
	document.getElementById("show-birthday").innerHTML = "";
}