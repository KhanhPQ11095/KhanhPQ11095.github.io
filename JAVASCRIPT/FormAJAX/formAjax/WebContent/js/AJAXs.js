function getXMLHttpRequest() {
	// Tao bien XMLHttpRequest
	var xmlHttpReq;
	if (window.XMLHttpRequest) {
		xmlHttpReq = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (exp1) {
			try {
				xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (exp2) {
				// XMLHttpRequest tra ve false
				alert("Trình Duyệt Của Bạn Không Được Hỗ Trợ")
			}
		}
	}
	return xmlHttpReq;
}
var xmlHttpRequest = getXMLHttpRequest();
function makeRequest() {
	var user = document.getElementById('Username').value;
	var pass = document.getElementById('Password').value;
	var email = document.getElementById('Email').value;
	var birD = document.getElementById('Birthday').value;

	var url = "formAjaxServlet.html?Username=" + user + "&Password=" + pass + "&Email=" + email	+ "&Birthday=" + birD;

	xmlHttpRequest.open("POST", url, true);
	xmlHttpRequest.onreadystatechange = process;
	xmlHttpRequest.send();
}

function process() {
	if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
		var showKq = xmlHttpRequest.responseText;
		console.log(showKq);
		var error = document.getElementById("show-username");
		error.innerHTML = showKq;
	}
}