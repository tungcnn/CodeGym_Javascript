const CAR_WIDTH = 50;
const CAR_HEIGHT = 70;
const MONSTER_WIDTH = 70;
const MONSTER_HEIGHT = 70;

function Monster(num) {
    this.xPosition = Math.floor(Math.random() * 401);
    this.yPosition = -100;
    this.speed = 10;
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
    this.speed = 10;

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

    this.start = function () {
        this.car.draw(this.ctx);
        this.monster1.draw(this.ctx, 1);
        setInterval('myGame.moveMonster()', 100);
    }

    this.refreshCar = function () {
        this.ctx.clearRect(this.car.xPosition - this.car.speed, this.car.yPosition - this.car.speed, CAR_WIDTH + this.car.speed * 2, CAR_HEIGHT + this.car.speed * 2);
        this.car.draw(this.ctx)
    }
    this.refreshMonster = function () {
        this.ctx.clearRect(this.monster1.xPosition - this.monster1.speed, this.monster1.yPosition - this.monster1.speed, MONSTER_WIDTH + this.monster1.speed * 2, MONSTER_HEIGHT + this.monster1.speed * 2);
        this.monster1.draw(this.ctx, 1)
        console.log(this.monster1.yPosition)
    }
    this.moveMonster = function () {
        this.monster1.move()
        this.refreshMonster();
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
        this.refreshCar();
    }
}

let myGame = new Game();
myGame.start();
let i = 0;



