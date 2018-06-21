//Menu Canvas
var menuGame = document.getElementById('menu');
var ctxMenu = menuGame.getContext('2d');
//Main Canvas
var mainGame = document.getElementById('main');
var ctxMain = mainGame.getContext('2d');
//** IMG **//
/* IMG TOP */
var imgTop = new Image();
imgTop.src = 'img/Top-BackGround.jpg';

var imgBoom = new Image();
imgBoom.src = 'img/Boom.png';

var imgSPause = new Image();
imgSPause.src = 'img/Start-Pause.png';

var imgReset = new Image();
imgReset.src = 'img/Reset.png';

var imgHeart = new Image();
imgHeart.src = 'img/Heart.png';

/* IMG DOWN */
var imgDown = new Image();
imgDown.src = 'img/Down-Background.png';

var imgMonster = new Image();
imgMonster.src = 'img/Monster.png';

var imgBigBang = new Image();
imgBigBang.src = 'img/Big-Bang.png';

var imgCut = new Image();
imgCut.src = 'img/Cut.png';

var imgGameOver = new Image();
imgGameOver.src = 'img/Game-Over.png';
//* End IMG *//

//** Hien Thi Text Va Img **//
// Top
function showMenu(){
	// Top
	ctxMenu.drawImage(imgTop, 0, 0, 600, 133);
	ctxMenu.drawImage(imgHeart, 100, 35, 30, 30);
	ctxMenu.drawImage(imgBoom, 250, 35, 60, 60);
	ctxMenu.drawImage(imgSPause, 335, 35, 60, 60);
	ctxMenu.drawImage(imgReset, 430, 35, 60, 60);

	ctxMenu.fillStyle = '#000000';
	ctxMenu.font = '30px Time News Roman';

	ctxMenu.fillText('Score :', 10, 30);
	ctxMenu.fillText('Heart :', 10, 60);
	ctxMenu.fillText('Level :', 10, 90);
	ctxMenu.fillText ('High Score :', 250, 30);
}

// //** Tao Monster va Chuyen Dong **//
// //* Khoi Tao Doi Tuong Monster *//

function Monsters(mapWidth, mapHeight){ 
	this.mapWidth = mapWidth; 
	this.mapHeight = mapHeight; 
 
	this.speedX = 5; 
	this.speedY = 5; 
 
	this.cx = Math.floor(Math.random()*(this.mapWidth-100));
	this.cy = Math.floor(Math.random()*(this.mapHeight-100))
} 
Monsters.prototype.draw = function(ctxMain){ 
	ctxMain.beginPath(); 
	ctxMain.drawImage(imgMonster, this.cx,this.cy, 100, 100); 
	ctxMain.closePath(); 
	ctxMain.fill(); 
} 
Monsters.prototype.move = function(){ 
	this.cx += this.speedX; 
	this.cy += this.speedY; 
 
	this.left = this.cx
	this.top = this.cy
	this.right = this.cx + 100; 
	this.bottom = this.cy + 100; 
} 
Monsters.prototype.checkCollision = function() { 
	if(this.left < 0 || this.right > this.mapWidth){
		this.speedX =  -this.speedX;
  	} 
	if(this.top < 0 || this.bottom > this.mapHeight) {
 		this.speedY =  -this.speedY; 
	}
}
 
function draw(){ 
	ctxMain.drawImage(imgDown, 0, 0, 500, 500);
	Monsters.draw(ctxMain); 
} 
function update(){ 
	Monsters.move(); 
	Monsters.checkCollision(); 
	draw(); 
} 
 
window.onload = function main(){ 
	showMenu(); 
	Monsters = new Monsters(mainGame.width,mainGame.height); 
	setInterval("update()", 20); 
} 

//** END Tao Monster va Chuyen Dong **//