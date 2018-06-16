function HTTP() {
	// Khoi Tao Doi Tuong
	if (window.XMLHttpRequest) {
 	   var xhttp = new XMLHttpRequest();
	} else {
    	var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
}
var http = HTTP();

function sendAjax() {
    var user = document.getElementById('Username');
	var pass = document.getElementById('Password');
	var cpass = document.getElementById('cPassword');
	var email = document.getElementById('Email');
	var birD = document.getElementById('Birthday');
	// Cau Hinh Request
	http.open('POST','server.xml?Username=' + user[0].value + '&Password=' + pass[0].value + '&cPassword=' + cpass[0].value + '&Email=' + email[0].value + '&Birthday=' + birD[0].value,true);
    http.onreadystatechange = function () {
        // Kiem Tra Neu Nhu Da Gui Request Thanh Cong
        if (this.readyState == 4 && this.status == 200) {
            // In Ra Data Nhan Duoc
            data = http.responseText;
            console.log(data);
            var nearby = document.getElementById('show-username');
            nearby.innerHTML = data;
        }
    }
    // Gui Request
    http.send();
}