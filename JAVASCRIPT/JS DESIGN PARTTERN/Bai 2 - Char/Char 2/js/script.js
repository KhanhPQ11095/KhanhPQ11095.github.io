window.onload = function () {
    //Lấy thẻ HTML Canvas
    var myCanvas = document.getElementById("myCanvas");
    var ctx = myCanvas.getContext("2d");
    //Thiết lập khung Canvas
    myCanvas.width = 600;
    myCanvas.height = 400;
    //Nội dung Canvas
    var data_1 = "RANK SCORE RANK";
    var data_2 = "HISTORY";
    var nameChar = "QUY LAM VIEC";
    var num_0 = "0";
    var num_1 = "1";
    var num_2 = "2";
    var num_3 = "3";
    var num_4 = "4";
    //Function vẽ Biểu đồ
    var myChar = function () {
        //Vẽ khung biểu đồ
        function numChar(ctx, startX1, startY1, endX1, endY1, startX2, startY2, endX2, endY2, color) {
            ctx.strokeStyle = color;
            ctx.beginPath(); //Bắt đầu nét vẽ
            ctx.moveTo(startX1, startY1); //Điểm bắt đầu vẽ 1
            ctx.lineTo(endX1, endY1); //Điểm kết thúc vẽ 1
            ctx.lineTo(startX2, startY2); //Điểm bắt đầu vẽ 2
            ctx.lineTo(endX2, endY2); //Điểm kết thúc vẽ 2
            ctx.stroke(); //Vẽ
        }
        //Vẽ đường tăng trưởng
        function drawLineChar(ctx, startX1, startY1, loc1, loc2, loc3, loc4, loc5, loc6) {
            ctx.beginPath(); //Bắt đầu nét vẽ
            ctx.moveTo(startX1, startY1); //Điểm bắt đầu
            ctx.bezierCurveTo(loc1, loc2, loc3, loc4, loc5, loc6); //Vẽ qua các điểm
            ctx.lineWidth = 5; //Độ đậm của nét vẽ
            ctx.strokeStyle = "#0087F9";
            ctx.stroke();
        }

        numChar(ctx, 100, 80, 100, 300, 100, 330, 500, 330, '#000000');
        drawLineChar(ctx, 120, 250, 170, 100, 200, 100, 210, 200);
        drawLineChar(ctx, 210, 200, 215, 250, 250, 250, 270, 190);
        drawLineChar(ctx, 270, 190, 295, 90, 330, 150, 340, 190);
        drawLineChar(ctx, 340, 190, 360, 250, 400, 150, 450, 150);

    }
    //Vẽ số và chữ
    var myData = function () {
        function drawNum() {
            ctx.font = "30px Time News Roman";
            //Vẽ số
            ctx.fillText(num_0, 80, 330);
            ctx.fillText(num_1, 80, 280);
            ctx.fillText(num_2, 80, 230);
            ctx.fillText(num_3, 80, 180);
            ctx.fillText(num_4, 80, 130);
            //Vẽ chữ
            ctx.fillText(data_1, 150, 30);
            ctx.fillText(nameChar, 140, 380);
            ctx.rotate(-90 * Math.PI / 180); //Xoay chữ 90 độ
            ctx.fillText(data_2, -250, 50);
        }

        drawNum();

    }

    myChar();
    myData();

}