window.onload = function () {
	//Lấy thẻ HTML Canvas
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	//Thiết lập khung Canvas
	myCanvas.width = 600;
	myCanvas.height = 400;
	//Nội dung vẽ Data
	var num_10 = "10%";
	var num_20 = "20%";
	var num_60 = "60%";
	var xx = "Xuất sắc";
	var t = "Tốt";
	var tb = "Trung bình";
	var k = "Kém";
	//Vẽ Biểu Đồ
	var myChar = function () {
		function drawCircle(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
			ctx.fillStyle = color;
			ctx.beginPath(); //Bắt đầu nét vẽ
			ctx.moveTo(centerX, centerY); //Điểm bắt đầu vẽ
			ctx.arc(centerX, centerY, radius, startAngle, endAngle);
			ctx.closePath(); //Kết thúc nét vẽ
			ctx.fill();
		}

		drawCircle(ctx, 200, 200, 150, Math.PI * 1.5, Math.PI * 1.7, '#4267B1');
		drawCircle(ctx, 200, 200, 150, Math.PI * 1.7, Math.PI * 2.1, '#DB3D26');
		drawCircle(ctx, 200, 200, 150, Math.PI * 2.1, Math.PI * 2.3, '#F8991D');
		drawCircle(ctx, 200, 200, 150, Math.PI * 2.3, Math.PI * 1.5, '#189747');
		drawCircle(ctx, 200, 200, 80, Math.PI * 0, Math.PI * 4, '#FFFFFF');
		
	}
	//Vẽ chú thích
	var myNote = function () {
		function drawNote() {
		ctx.fillStyle = "#4267B1";
		ctx.fillRect(450, 140, 15, 15);
		ctx.fillStyle = "#DB3D26";
		ctx.fillRect(450, 180, 15, 15);
		ctx.fillStyle = "#F8991D";
		ctx.fillRect(450, 220, 15, 15);
		ctx.fillStyle = "#189747";
		ctx.fillRect(450, 260, 15, 15);
		ctx.fillStyle = "#000000";
		ctx.fillText(xx, 480, 155);
		ctx.fillText(t, 480, 195);
		ctx.fillText(tb, 480, 235);
		ctx.fillText(k, 480, 275);
		}

		drawNote();

	}
	//Vẽ Data
	var myData = function () {
		function drawData() {
			ctx.font = "20px Time News Roman";
			ctx.fillStyle = "#000000";
			ctx.fillText(num_10, 220, 100);
			ctx.fillText(num_20, 290, 175);
			ctx.fillText(num_10, 280, 275);
			ctx.fillText(num_60, 80, 250);
		}

		drawData();

	}

	myChar();
	myData();
	myNote();
	
}