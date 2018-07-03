window.onload = function () {
	//Lấy thẻ HTML Canvas
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	//Thiết lập khung Canvas
	myCanvas.width = 800; //Rộng
    myCanvas.height = 600; //Cao
	//Nội dung vẽ data
	//Data chữ
	var nameChar = "BIỂU ĐỒ LỊCH SỬ LEVEL OF POSITION";
	var data_1 = "LEVEL OF POSITION";
	var data_2 = "TÊN DỰ ÁN";
	var level = "LEVEL";
	var _of = "OF";
	var position = "POSITION";
	var tA = "A"; var tB = "B"; var tC = "C"; var tD = "D"; var tE = "E";
	//Data số
	var num_0 = "0";
	var num_1 = "1";
	var num_2 = "2";
	var num_3 = "3";
	var num_4 = "4";
	//Vẽ khung biểu đồ
	var myBox = function () {
		function line(ctx, startX1, startY1, endX1, endY1, color) {
			ctx.strokeStyle = color;
			ctx.beginPath(); //Bắt đầu nét vẽ
			ctx.moveTo(startX1, startY1); //Điểm bắt đầu vẽ
			ctx.lineTo(endX1, endY1); //Điểm kết thúc vẽ
			ctx.lineWidth = 1; //Độ đậm của nét vẽ
			ctx.stroke();
		}

		line(ctx, 100, 350, 600, 350, '#000000'); //Vẽ đường 0
		line(ctx, 100, 300, 600, 300, '#E5E3E3'); //Vẽ đường 1
		line(ctx, 100, 250, 600, 250, '#E5E3E3'); //Vẽ đường 2
		line(ctx, 100, 200, 600, 200, '#E5E3E3'); //Vẽ đường 3
		line(ctx, 100, 150, 600, 150, '#E5E3E3'); //Vẽ đường 4

	}
	//Vẽ biểu đồ
	var myChar = function () {
		function boxChar() {
			ctx.fillStyle = "#3366CC";
			ctx.fillRect(100, 250, 50, 100);
			ctx.fillRect(200, 340, 50, 10);
			ctx.fillRect(300, 200, 50, 150);
			ctx.fillRect(400, 150, 50, 200);
			ctx.fillRect(500, 150, 50, 200);
			ctx.fillRect(620, 150, 50, 25);
		}
		
		boxChar();
		
	}
	//Vẽ data
	var myData = function () {
		function data() {
			ctx.font = "20px Time News Roman";
			ctx.fillStyle = "#000000";
			//Data số
			ctx.fillText(num_0, 70, 355);
			ctx.fillText(num_1, 70, 305);
			ctx.fillText(num_2, 70, 255);
			ctx.fillText(num_3, 70, 205);
			ctx.fillText(num_4, 70, 155);
			//Data chữ
			ctx.fillText(tA, 120, 375);
			ctx.fillText(tB, 220, 375);
			ctx.fillText(tC, 320, 375);
			ctx.fillText(tD, 420, 375);
			ctx.fillText(tE, 520, 375);
			ctx.fillText(level, 620, 200);
			ctx.fillText(_of, 620, 230);
			ctx.fillText(position, 620, 260);
			ctx.font = "32px Time News Roman";
			ctx.fillText(nameChar, 70, 70);
			ctx.font = "italic 21px Time News Roman"; //Chữ nghiêng Italic
			ctx.fillStyle = "#8B8B8B";
			ctx.fillText(data_2, 300, 420);
			ctx.rotate(-90 * Math.PI / 180); //Xoay chữ 90 độ
            ctx.fillText(data_1, -355, 30);
		}

		data();
		
	}

	myBox();
	myChar();
	myData();

}