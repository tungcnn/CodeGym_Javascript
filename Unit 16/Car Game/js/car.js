const CAR_WIDTH = 50;
const CAR_HEIGHT = 70;
const MONSTER_WIDTH = 70;
const MONSTER_HEIGHT = 70;

function Monster(num) {
    this.xPosition = Math.floor(Math.random() * 401);
    this.yPosition = Math.floor(Math.random() * 100) - 100;
    this.speed = 5;
    this.src = 'images/mon' + num + '.png';
    this.draw = function (ctx) {
        var monster = new Image();
        monster.src = this.src;
        var xPosition = this.xPosition;
        var yPosition = this.yPosition;
        monster.onload = function () {
            ctx.drawImage(monster, xPosition, yPosition, MONSTER_WIDTH, MONSTER_HEIGHT);
        }
    }
    this.move = function () {
        this.yPosition += this.speed;
    }
}

function Car() {
    this.xPosition = 250;
    this.yPosition = 600;
    this.carWidth = 70;
    this.carHeight = 100
    this.speed = 20;

    this.draw = function (ctx) {
        var car = new Image();
        car.src = 'images/up.png';
        var xPosition = this.xPosition;
        var yPosition = this.yPosition;
        car.onload = function () {
            ctx.drawImage(car, xPosition, yPosition, CAR_WIDTH, CAR_HEIGHT);
        }
    }
    this.move = function (direction) {
        switch (direction) {
            case 37:
                this.xPosition -= this.speed;
                break;
            case 38:
                this.yPosition -= this.speed;
                break;
            case 39:
                this.xPosition += this.speed;
                break;
            case 40:
                this.yPosition += this.speed;
                break;
        }
    }
}
function Game() {
    this.car = new Car();
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.monster1 = new Monster(1);
    this.monsters = [];

    for (let i = 1; i <= 3; i++) {
        let monster = new Monster(i);
        this.monsters[i - 1] = monster;
    }

    this.start = function () {
        this.interval = setInterval(update, 20);
    }
    this.stop = function () {
        clearInterval(this.interval);
    }

    this.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.moveCar = function (event) {
        switch (event.keyCode) {
            case 37:
                this.car.move(37);
                break;
            case 38:
                this.car.move(38);
                break;
            case 39:
                this.car.move(39);
                break;
            case 40:
                this.car.move(40);
                break;
        }
    }
    this.checkCrash = function () {
        var carLeft = this.car.xPosition;
        var carRight = this.car.xPosition + this.car.width;
        var carTop = this.car.yPosition;
        var carBot = this.car.yPosition + this.car.height;
        var crash = true;
        
        for (let i = 0; i < this.monsters.length; i++) {
            var monLeft = monsters[i].xPosition;
            var monRight = monsters[i].xPosition + monsters[i].width;
            var monTop = monsters[i].yPosition;
            var monBot = monsters[i].yPosition + monsters[i].height;
            if (carLeft > monRight || carBot < monTop || carRight < monLeft || carTop > monBot) {
                crash = false;
            }
        }

        return crash;
    }
}

let myGame = new Game();

function startGame() {
    myGame.start();
}
function update() {
    if (myGame.checkCrash()) {

    } else {
        myGame.clear();
        myGame.car.draw(myGame.ctx);
        for (let i = 0; i < myGame.monsters.length; i++) {
            console.log(i)
            if (myGame.monsters[i].yPosition <= myGame.canvas.height + 100) {
                myGame.monsters[i].move();
                myGame.monsters[i].draw(myGame.ctx)
            } else {
                myGame.monsters[i].yPosition = -100;
                myGame.monsters[i].xPosition = Math.floor(Math.random() * 401);
            }
        }
    }
}



