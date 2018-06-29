window.onload = function () {
	var myCanvas = document.getElementById ("myCanvas");
	var ctx = myCanvas.getContext ("2d");
	myCanvas.width = 600;
	myCanvas.height = 400;

	function drawEllipse (ctx, centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, color) {
		ctx.fillStyle = color;
		ctx.beginPath ();
		ctx.moveTo (centerX, centerY);
		ctx.ellipse (centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle);
		ctx.closePath ();
		ctx.fill ();
	}

	function drawTriangle (ctx, startX1, startY1, endX1, endY1, endY2, color) {
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.beginPath ();
		ctx.moveTo (startX1,startY1);
		ctx.lineTo (endX1,endY1);
		ctx.lineTo (endX1,endY2);
		ctx.closePath ();
		ctx.fill ();
	}

	function drawEllipseCylinder () {
		ctx.fillStyle = "#4527A5";
		ctx.beginPath ();
		ctx.moveTo (50,200);
		ctx.lineTo (50,250);
		ctx.ellipse (200, 200, 70, 150, -(90 * Math.PI/180), 1.5 * Math.PI, 0.5 * Math.PI, true);
		ctx.ellipse (200, 250, 70, 150, 90 * Math.PI/180, 1.5 * Math.PI, 0.5 * Math.PI);
		ctx.fill ();
	}

	function drawPieSlice (ctx, centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, color) {
		ctx.fillStyle = color;
		ctx.beginPath ();
		ctx.moveTo (centerX, centerY);
		ctx.ellipse (centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle);
		ctx.closePath ();
		ctx.fill ();
	}

	function drawLinePie (ctx, startX1, startY1, endX1, endY1, color) {
		ctx.fillStyle = color;
		ctx.beginPath ();
		ctx.moveTo (startX1, startY1);
		ctx.lineTo (startX1, endY1);
		ctx.lineTo (endX1, endY1);
		ctx.lineTo (endX1, startY1);
		ctx.fill ();
	}
	
	drawTriangle (ctx, 200, 200, 268, 138, 200, '#4527A5');
	drawPieSlice (ctx, 225, 190, 70, 150, 90 * Math.PI / 180, 5.15 * Math.PI, Math.PI * 1.5, '#FF0000');
	drawLinePie(ctx, 375, 190, 225, 240, "#FF9393");
	drawEllipseCylinder ();
	drawEllipse (ctx, 200, 200, 70, 150, 90 * Math.PI / 180, 1.5 * Math.PI, Math.PI * 1.15, '#0087F9');
}


	

// 	function drawArc(ctx, centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, color) {
		
// 		ctx.strokeStyle = color;
// 		ctx.beginPath();
// 		ctx.moveTo(50, 250);
// 		ctx.lineTo(50, 100);
// 		ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngl);
// 		ctx.stroke();
// 	}

	


// 	// function drawEllipseCylinder(ctx, centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle, color, startX1, endX1, startX2, endY2) {
// 	// 	// ctx.fillStyle = color;
// 	// 	ctx.beginPath();
// 	// 	ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle);
// 	// 	ctx.closePath();
// 	// 	// ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle);
// 	// 	ctx.stroke();
// 	// 	// ctx.fill();
// 	// }
// 	// // drawEllipseCylinder(ctx, 200,200,70,150, 90 * Math.PI / 180, 1.5 * Math.PI , 0.5 * Math.PI,'#4527A5');
// 	// drawEllipseCylinder(ctx, 200,250,70,150, 90 * Math.PI / 180, 1.5 * Math.PI , 0.5 * Math.PI,'#4527A5');
// 	// // drawEllipseCylinder(ctx, 200,200,70,150, 90 * Math.PI / 180, 1.5 * Math.PI , 0.5 * Math.PI,'#4527A5');
	
	
	

	
// 	// drawArc(ctx, 200,200,70,150, 90 * Math.PI / 180, 1.5 * Math.PI , 0.5 * Math.PI, 50, 250, 50, 0, '#4527A5');
// 	// drawArc(ctx, 200,250,70,150, 90 * Math.PI / 180, 1.5 * Math.PI , 0.5 * Math.PI, 300, 300, 300, 300, '#4527A5');
// 	// drawArc(ctx, 200,250,70,150, 90 * Math.PI / 180, 1.5 * Math.PI );


	