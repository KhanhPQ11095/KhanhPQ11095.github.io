window.onload = function () {
	//Lấy thẻ HTML Canvas
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	//Thiết lập khung Canvas
	myCanvas.width = 600;
	myCanvas.height = 400;
	//Nội dung Canvas
	var data_1 = "80% ĐÃ ĐẠT";
	var data_2 = "20% CHƯA ĐẠT";
	var nameChar = "BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC";
	//Function vẽ Nội dung
	var myData = function () {
		function drawData() {
			ctx.font = "15px Time News Roman";
			ctx.fillStyle = "#000000";
			ctx.fillText(data_1, 100, 120);
			ctx.fillText(data_2, 450, 100);
		}
		//Vẽ đường dẫn
		function drawPath_1(ctx, startX1, startY1, endX1, endY1, startX2, startY2, endX2, endY2, startX3, startY3, endX3, endY3, color) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(startX1, startY1); //Điểm bắt đầu vẽ 1
			ctx.lineTo(endX1, endY1); //Điểm kết thúc vẽ 1
			ctx.lineTo(startX2, startY2); //Điểm bắt đầu vẽ 2
			ctx.lineTo(endX2, endY2); //Điểm kết thúc vẽ 2
			ctx.lineTo(startX3, startY3); //Điểm bắt đầu vẽ 3
			ctx.lineTo(endX3, endY3); //Điểm kết thúc vẽ 3
			ctx.lineTo(startX1, startY1);
			ctx.fill();
		}
		//Vẽ đường dẫn
		function drawPath_2(ctx, startX1, startY1, endX1, endY1, startX2, startY2, endX2, endY2, startX3, startY3, endX3, endY3, color) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(startX1, startY1); //Điểm bắt đầu vẽ 1
			ctx.lineTo(endX1, endY1); //Điểm kết thúc vẽ 1
			ctx.lineTo(startX2, startY2); //Điểm bắt đầu vẽ 2
			ctx.lineTo(endX2, endY2); //Điểm kết thúc vẽ 2
			ctx.lineTo(startX3, startY3); //Điểm bắt đầu vẽ 3
			ctx.lineTo(endX3, endY3); //Điểm kết thúc vẽ 3
			ctx.lineTo(startX1, startY1);
			ctx.fill();
		}

		function nameChar_1() {
			ctx.font = "15px Time News Roman";
			ctx.fillStyle = "#0087F9";
			ctx.fillText(nameChar, 170, 355);
		}

		drawPath_1(ctx, 100, 125, 195, 125, 250, 200, 247, 200, 194, 127, 100, 127, '#4527A5');
		drawPath_2(ctx, 400, 155, 450, 105, 560, 105, 560, 107, 451, 107, 400, 157, '#FF0000');
		nameChar_1();
		drawData();
	}
	//Vẽ biểu đồ
	var myChar = function () {
		function drawEllipse(ctx, centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, color) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(centerX, centerY);
			ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle);
			ctx.closePath();
			ctx.fill();
		}

		function drawTriangle(ctx, startX1, startY1, endX1, endY1, endY2, color) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(startX1, startY1);
			ctx.lineTo(endX1, endY1);
			ctx.lineTo(endX1, endY2);
			ctx.closePath();
			ctx.fill();
		}

		function drawEllipseCylinder() {
			ctx.fillStyle = "#4527A5";
			ctx.beginPath();
			ctx.moveTo(150, 200);
			ctx.lineTo(150, 250);
			ctx.ellipse(300, 200, 70, 150, -(90 * Math.PI / 180), 1.5 * Math.PI, 0.5 * Math.PI, true);
			ctx.ellipse(300, 250, 70, 150, 90 * Math.PI / 180, 1.5 * Math.PI, 0.5 * Math.PI);
			ctx.fill();
		}

		function drawPieSlice(ctx, centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, color) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(centerX, centerY);
			ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle);
			ctx.closePath();
			ctx.fill();
		}

		function drawLinePie(ctx, startX1, startY1, endX1, endY1, color) {
			ctx.fillStyle = color;
			ctx.beginPath();
			ctx.moveTo(startX1, startY1);
			ctx.lineTo(startX1, endY1);
			ctx.lineTo(endX1, endY1);
			ctx.lineTo(endX1, startY1);
			ctx.fill();
		}

		drawTriangle(ctx, 300, 200, 368, 138, 200, '#4527A5');
		drawPieSlice(ctx, 325, 190, 70, 150, 90 * Math.PI / 180, 5.15 * Math.PI, Math.PI * 1.5, '#FF0000'); 	
		drawLinePie(ctx, 475, 190, 325, 240, '#FF9393');
		drawEllipseCylinder();
		drawEllipse(ctx, 300, 200, 70, 150, 90 * Math.PI / 180, 1.5 * Math.PI, Math.PI * 1.15, '#0087F9');
		
	}

	myChar();
	myData();

}