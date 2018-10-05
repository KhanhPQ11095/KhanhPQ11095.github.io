//Draw Canvas Menu
var canvasMenu = document.getElementById('menu');
var ctxMenu = canvasMenu.getContext('2d');
canvasMenu.width = 450;
canvasMenu.height = 100;

//Draw Canvas Main
var canvasMain = document.getElementById('main');
var ctxMain = canvasMain.getContext('2d');
canvasMain.width = 450;
canvasMain.height = 500;

//Random Location Monster
    var monster1 = new Monster(canvasMain.width, canvasMain.height, 1, 1, 120, 120); //Location Monster 1
    var monster2 = new Monster(canvasMain.width, canvasMain.height, 1, 1, 0, 0); //Location Monster 2
    var monster3 = new Monster(canvasMain.width, canvasMain.height, 0, 1, 180, 0); //Location Monster 3
    var monster4 = new Monster(canvasMain.width, canvasMain.height, -1, 1, 350, 0); //Location Monster 4
    var monster5 = new Monster(canvasMain.width, canvasMain.height, 1, 0, 0, 180); //Location Monster 5
    var monster6 = new Monster(canvasMain.width, canvasMain.height, -1, 0, 350, 180); //Location Monster 6
    var monster7 = new Monster(canvasMain.width, canvasMain.height, 1, 1, 0, 400); //Location Monster 7
    var monster8 = new Monster(canvasMain.width, canvasMain.height, 0, 1, 180, 400); //Location Monster 8
    var monster9 = new Monster(canvasMain.width, canvasMain.height, -1, 1, 350, 400); //Location Monster 9
    var monster0 = [monster1, monster2, monster3, monster4, monster5, monster6,
        monster7, monster8, monster9];

//CMenu Image
var imgMenu = new Image();
imgMenu.src = 'img/Top-BackGround.jpg';

var imgBoom = new Image();
imgBoom.src = 'img/Boom.png';

var imgPause = new Image();
imgPause.src = 'img/Start-Pause.png';

var imgReset = new Image();
imgReset.src = 'img/Reset.png';

var imgHeart = new Image();
imgHeart.src = 'img/Heart.png'

//Main Image
var imgMain = new Image();
imgMain.src = 'img/Down-Background.png'

var imgMonster = new Image();
imgMonster.src = 'img/Monster.png'

var imgBigBang = new Image();
imgBigBang.src = 'img/Big-Bang.png';

var imgGameOver = new Image();
imgGameOver.src = 'img/Game-Over.png';

var imgBlood = new Image();
imgBlood.src = 'img/Cut.png';

//Show Menu
function showMenu() {
    ctxMenu.drawImage(imgMenu, 0, 0);
    ctxMenu.drawImage(imgBoom, 250, 40, 60, 60);
    ctxMenu.drawImage(imgPause, 310, 40, 60, 60);
    ctxMenu.drawImage(imgReset, 380, 40, 60, 60);

    ctxMenu.fillStyle = '#000000';
    ctxMenu.font = ' 30px Time News Roman';

    ctxMenu.fillText('Score :', 10, 30);
    ctxMenu.fillText('Heart :', 10, 60);
    ctxMenu.fillText('No. Monster :', 10, 90);
    ctxMenu.fillText('High Core :', 200, 30);
}

//Show Main
function showMain() {
    ctxMain.drawImage(imgMain, -1550, 0, 2052, 500);
}

//Create Monsters in any Location
function Monster(mapWidtch, mapHeight, speedX, speedY, cx, cy) {
    this.mapWidtch = mapWidtch;
    this.mapHeight = mapHeight;
    this.transparen = false;
    this.speedX = speedX;
    this.speedY = speedY;
    this.cx = cx;
    this.cy = cy;
    this.oldCx = cx;
    this.oldCy = cy;
}
function blood(bx, by){
    this.bx = bx;
    this.by = by;
}

//Create Monster
Monster.prototype.draw = function () {
    ctxMain.beginPath();
    ctxMain.drawImage(imgMonster, this.cx, this.cy, 100, 100);
    ctxMain.closePath();
}

//Create Move
Monster.prototype.move = function () {
    this.cx += this.speedX;
    this.cy += this.speedY;
    this.left = this.cx;
    this.top = this.cy;
    this.right = this.cx + 100;
    this.bottom = this.cy + 100;
}

//Create Collision
Monster.prototype.checkCollision = function () {
    if (this.left < 0 || this.right > canvasMain.width) {
        this.speedX = -this.speedX;
    }
    if (this.top < 0 || this.bottom > canvasMain.height) {
        this.speedY = -this.speedY;
    }
}

//Confirm Object Location Move
Monster.prototype.monsterStatus = function (e) {
    preX = e.pageX - canvasMain.offsetLeft;
    preY = e.pageY - canvasMain.offsetTop;
    if (this.cx + 25 < preX && preX < this.cx + 100 
        && this.cy + 10 < preY && preY < this.cy + 90 &&  this.transparen == true 
        && startStatus == true) {
        this.transparen = false;
        blood.bx = this.cx;
        blood.by = this.cy;  
        qMonster--;
        if (qMonster == 0){
            score(10);
            randomMonster();
            return;
        }
        score(10);
        
    }
}

//Confirm Location for Backward
Monster.prototype.getPlace = function () {
    if (this.cx + 25 < 222 && 222 < this.cx + 100 && this.cy + 10 < 222 && 222 < this.cy + 90) {
        this.speedX = -this.speedX;
        this.speedY = -this.speedY;
    }
}

//Delete Monster
Monster.prototype.clearMonster = function () {
    ctxMain.clearRect(this.cx - 1, this.cy - 1, 100, 100);
    ctxMain.clearRect(this.cx + 1, this.cy + 1, 100, 100);
}

//Update Monster after Move
var startStatus = true;
function update() {
    pausePlay(startStatus);
    if (startStatus) {
        
        let countMonster = 0;
        for (countMonster = 0; countMonster < quantityMonster; countMonster++) {
            if (monster0[countMonster].transparen) {
                monster0[countMonster].checkCollision();
                monster0[countMonster].clearMonster();
            }
        }
        drawMonster(quantityMonster);
        checkHeart();
    }
}

//Once Move Will Draw Again
function drawMonster(quantityMonster) {
    showMain();
    if (countClickMonster > 0){
        ctxMain.drawImage(imgBlood, blood.bx+25, blood.by+25, 100 , 100);
    }
    for (countMonster = 0; countMonster < quantityMonster; countMonster++) {
        if (monster0[countMonster].transparen) {
            monster0[countMonster].draw();
            monster0[countMonster].move();
            if (countMonster != 0) {
                monster0[countMonster].getPlace();
            }
        }
    }
}

//Even Click
function mouseClickMenu(name, locationXMin, locationXMax, locationYMin, locationYMax) {
    canvasMenu.addEventListener('click', function (e) {
        preX = e.pageX - canvasMenu.offsetLeft;
        preY = e.pageY - canvasMenu.offsetTop;
        if (locationXMin < preX && preX < locationXMax && locationYMin < preY && preY < locationYMax ) {
            if (countHeart >= 0){
                if (name == 'boom' && startStatus == true) {
                    killAll();
                }
                if (name == 'pause') {
                    startStatus = !startStatus;
                    update();
                }
            }
            if (name == 'reload') {
                location.reload();
            }
        }
    })
}

//Even Click Monsters
var countClickMonster = 0;
function mouseClickMonster(i) {
    canvasMain.addEventListener('click', function (e) {
        monster0[i].monsterStatus(e);
    })
}

//Even Click On Main
var countClickCanvasMain = 0;
function canvasClick() {
    canvasMain.addEventListener('click', function (e) {
        if (startStatus){
            countClickCanvasMain++;
        }  
    }) 
}

//Kill All
function killAll() {
    startStatus = !startStatus;
    showMain();
    ctxMain.drawImage(imgBigBang, 10, 20, 450, 450);
    setTimeout('play()', 500);
}

function play() {
    let count = 0;
    for (countMonster = 0; countMonster < quantityMonster; countMonster++) {
        if ( monster0[countMonster].transparen){
            monster0[countMonster].transparen = false;
            count ++;
        }
    }
    score(count * 10);
    startStatus = !startStatus;
    randomMonster();
    update();
}

//Confimr Object Location
function mouse() {
    let preX;
    let preY;
    canvasMain.addEventListener('click', function (e) {
        preX = e.pageX - this.offsetLeft;
        preY = e.pageY - this.offsetTop;
    })
}

//Score
var poin = 0;
function score(number) {
    if(number > 0){
        countClickMonster++;
    }
    if (poin < 50 && qMonster == 0) {
        qMonster = 1;
    }
    else if (poin >= 50 && poin < 150 && qMonster == 0) {
        qMonster = 2;
    }
    else if (poin >= 150 && poin < 250 && qMonster ==0) {
    	qMonster = 3;
    }
    else if (poin > 250 && qMonster == 0) {
    	qMonster = 3;
    }
    poin += number;
    ctxMenu.beginPath();
    ctxMenu.clearRect(100, 5, 100, 30);
    ctxMenu.fillText(poin, 100, 30);
    ctxMenu.closePath();
    highCore(poin);
    qmonster0(level);
}

//High Core
function highCore(poin) {
    let hiCore = 0;
    if (localStorage.myScore == undefined){
        localStorage.myScore = 0;
        hiCore = localStorage.myScore;
    } else{
        hiCore = localStorage.myScore;
        if (poin >= hiCore){
            localStorage.myScore = poin;
            hiCore = poin;
        }
    }
    ctxMenu.clearRect(350, 5, 100, 30);
    ctxMenu.fillText(hiCore, 350, 30);
}

//Pause And Play
function pausePlay(startStatus) {
    if (startStatus) {
        setTimeout('update()');
    }
}

//Quantity Monsters
var quantityMonster = 9
var qMonster = 1;
function randomMonster() {
    let q = 0;
    let tt = -1;
    for (q = 0; q < qMonster; q++){
        
        do{
            var randomMonst = random();
        } while(randomMonst == tt)
        tt = randomMonst;
        monster0[randomMonst].transparen = true;
        monster0[randomMonst].cx = monster0[randomMonst].oldCx;
        monster0[randomMonst].cy = monster0[randomMonst].oldCy;
        mouseClickMonster(randomMonst);
    }
}

function random(){
    let randomMonst = Math.floor(Math.random() * (quantityMonster));
    return randomMonst;
}

function qmonster0(level) {
	level++;
	level = qMonster;
    ctxMenu.clearRect(185, 65, 65, 30);
	ctxMenu.fillText(level, 185, 90);
}

//Heart
var countHeart = 5;
function checkHeart() {
    if(countClickCanvasMain > countClickMonster ){
        score(-10);
        if (countHeart == 5){
            clearHeart(220, 40);
        }
        if (countHeart == 4){
            clearHeart(190, 40);
        }
        if (countHeart == 3){
            clearHeart(160, 40);
        }
        if(countHeart == 2){
            clearHeart(130, 40);
        }
        if (countHeart == 1){
            clearHeart(100, 40);
        }
        if (countHeart == 0){
            startStatus = false;
            ctxMain.drawImage(imgGameOver, 80, 180);
        }
        countHeart--;
        countClickCanvasMain = countClickMonster; 
    }
}

//Draw Heart
function drawHeart() {
    ctxMenu.drawImage(imgHeart, 100, 40, 25, 25);
    ctxMenu.drawImage(imgHeart, 130, 40, 25, 25);
    ctxMenu.drawImage(imgHeart, 160, 40, 25, 25);
    ctxMenu.drawImage(imgHeart, 190, 40, 25, 25);
    ctxMenu.drawImage(imgHeart, 220, 40, 25, 25);
}

//Clear Head
function clearHeart(hx, hy) {
    ctxMenu.clearRect( hx, hy, 25, 25);
}


var level = 1;
window.onload = function main() {
    let speed = 1;
    let countMonster = 0;
    showMenu();
    showMain(); 
    qmonster0();
    mouseClickMenu('boom', 248, 300, 50, 95);
    mouseClickMenu('pause', 310, 368, 50, 90);
    mouseClickMenu('reload', 380, 435, 50, 95);
    randomMonster();
    canvasClick();
    pausePlay(startStatus);
    drawHeart();
}
