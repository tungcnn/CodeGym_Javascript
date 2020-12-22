const CAR_WIDTH = 50;
const CAR_HEIGHT = 80;
const MONSTER_WIDTH = 100;
const MONSTER_HEIGHT = 100;
const COIN_WIDTH = 50;
const COIN_HEIGHT = 50;
const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 700;
const BACKGROUND_SPEED = 50;
let monsterSpeed = 5;

function Background(x, y) {
    this.xPosition = x;
    this.yPosition = y;
    this.image = new Image();
    this.image.src = 'images/road.jpg'

    this.move = function () {
        this.yPosition += BACKGROUND_SPEED;
    }
    this.draw = function (Game) {
        let ctx = Game.ctx;
        ctx.drawImage(this.image, this.xPosition, this.yPosition, 500, 700);
    }
}
function Coin() {
    this.xPosition = Math.floor(Math.random() * (CANVAS_WIDTH - COIN_WIDTH));
    this.yPosition = Math.floor(Math.random() * (CANVAS_HEIGHT - COIN_HEIGHT));
    this.image = new Image();
    this.image.src = 'images/coin.png'
    this.draw = function (Game) {
        let ctx = Game.ctx;
        ctx.drawImage(this.image, this.xPosition, this.yPosition, COIN_WIDTH, COIN_HEIGHT);
    }
}
function Monster(num) {
    this.xPosition = Math.floor(Math.random() * 401);
    this.yPosition = Math.floor(Math.random() * 100) - 200;
    this.image = new Image();
    this.image.src = 'images/mon' + num + '.png';
    this.draw = function (Game) {
        let ctx = Game.ctx;
        ctx.drawImage(this.image, this.xPosition, this.yPosition, MONSTER_WIDTH, MONSTER_HEIGHT);

    }
    this.move = function () {
        this.yPosition += monsterSpeed;
    }
}

function Car() {
    this.xPosition = 250;
    this.yPosition = 600;
    this.carWidth = 70;
    this.carHeight = 100
    this.speed = 15;
    this.image = new Image();
    this.image.src = 'images/up.png';

    this.draw = function (Game) {
        let ctx = Game.ctx;
        ctx.drawImage(this.image, this.xPosition, this.yPosition, CAR_WIDTH, CAR_HEIGHT);
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
        if (this.xPosition < 0) {
            this.xPosition = 0
        } else if (this.xPosition > CANVAS_WIDTH - CAR_WIDTH) {
            this.xPosition = CANVAS_WIDTH - CAR_WIDTH
        }
        if (this.yPosition < 0) {
            this.yPosition = 0
        } else if (this.yPosition > CANVAS_HEIGHT - CAR_HEIGHT) {
            this.yPosition = CANVAS_HEIGHT - CAR_HEIGHT
        }
    }
}
function Game() {
    this.car = new Car();
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.monsters = [];
    this.crashSound = new Audio("sound/crash.mp3");
    this.runSound = new Audio("sound/medium.mp3");
    this.score = new Audio("sound/score.mp3");
    this.victory = new Audio("sound/victory.mp3");
    this.music = new Audio("sound/tokyodrift.mp3");
    this.music2 = new Audio("sound/gas.mp3");
    this.music.volume = 0.3;
    this.runSound.volume = 0.5;
    this.coins = [];
    this.currentspeed = document.getElementById("currentspeed");
    this.newspeed = 60;

    this.start = function () {
        this.interval = setInterval(update, 20);
    }
    this.stop = function () {
        clearInterval(this.interval);
        this.runSound.pause();
        this.music.pause();
        this.music2.pause();
        this.crashSound.play();
        this.clear();
        background1.draw(this);
        background2.draw(this);
        this.car.draw(this);
        setTimeout(function () {
            var choice = confirm("You suck. Try again?")
            if (choice == true)
                location.reload();
            else
                window.close();
        }, 1000);
    }
    this.win = function () {
        clearInterval(this.interval);
        this.runSound.pause();
        this.music.pause();
        this.music2.pause();
        this.victory.play();
        this.clear();
        background1.draw(this);
        background2.draw(this);
        this.car.draw(this);
        setTimeout(function () {
            var choice = confirm("You win! Race again?")
            if (choice == true)
                location.reload();
            else
                window.close();
        }, 1000);
    }
    this.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.moveCar = function (event) {
        switch (event.keyCode) {
            case 65:
            case 37:
                this.car.move(37);
                break;
            case 87:
            case 38:
                this.car.move(38);
                break;
            case 68:
            case 39:
                this.car.move(39);
                break;
            case 83:
            case 40:
                this.car.move(40);
                break;
            case 71:
                if (this.car.speed < 35 && monsterSpeed < 15) {
                    this.car.speed += 2;
                    this.runSound.volume += 0.025;
                    monsterSpeed += 0.5;
                    this.newspeed += 4;
                    this.currentspeed.style.width = this.newspeed + "%";
                }
                break;
            case 66:
                if (this.car.speed > 11 && monsterSpeed > 1) {
                    this.car.speed -= 2;
                    this.runSound.volume -= 0.025;
                    monsterSpeed -= 0.5;
                    this.newspeed -= 4;
                    this.currentspeed.style.width = this.newspeed + "%";
                }
                break;
        }
    }
    this.checkCrash = function (monster) {
        var carLeft = this.car.xPosition;
        var carRight = this.car.xPosition + CAR_WIDTH;
        var carTop = this.car.yPosition;
        var carBot = this.car.yPosition + CAR_HEIGHT;
        var crash = true;
        var monLeft = monster.xPosition;
        var monRight = monster.xPosition + MONSTER_WIDTH;
        var monTop = monster.yPosition;
        var monBot = monster.yPosition + MONSTER_HEIGHT;
        if (carLeft > monRight || carBot < monTop || carRight < monLeft || carTop > monBot) {
            crash = false;
        }
        return crash;
    }
    this.checkCoin = function (coin) {
        var carLeft = this.car.xPosition;
        var carRight = this.car.xPosition + CAR_WIDTH;
        var carTop = this.car.yPosition;
        var carBot = this.car.yPosition + CAR_HEIGHT;
        var score = true;
        var coinLeft = coin.xPosition;
        var coinRight = coin.xPosition + MONSTER_WIDTH;
        var coinTop = coin.yPosition;
        var coinBot = coin.yPosition + MONSTER_HEIGHT;
        if (carLeft > coinRight || carBot < coinTop || carRight < coinLeft || carTop > coinBot) {
            score = false;
        }
        return score;
    }
}

let myGame = new Game();
let score = 0;
let background1 = new Background(0, 0);
let background2 = new Background(0, 0 - CANVAS_HEIGHT);
let soundtrack = Math.floor(Math.random() * 10) + 1;

function startGame() {
    myGame.start();

    setInterval(function () {
        let coin = new Coin(myGame.canvas);
        myGame.coins.push(coin);
        if (myGame.coins.length > 1) {
            myGame.coins.shift();
        }
    }, 5000);

    setInterval(function () {
        let monNum = Math.floor(Math.random() * 3) + 1;
        let monNo;
        for (let i = 0; i < monNum; i++) {
            monNo = Math.floor(Math.random() * 9) + 1;
            let monster = new Monster(monNo);
            myGame.monsters.push(monster);
        }
    }, 600 * monsterSpeed);
}
function update() {
    myGame.clear();
 
    console.log(soundtrack)
    if (soundtrack <= 5) {
        myGame.music.play()
    } else {
        myGame.music2.play()
    }
    var crash;
    for (let i = 0; i < myGame.monsters.length; i++) {
        if (myGame.checkCrash(myGame.monsters[i]) == true) {
            crash = true;
        }
    }
    for (let i = 0; i < myGame.coins.length; i++) {
        if (myGame.checkCoin(myGame.coins[i]) == true) {
            myGame.score.play();
            score += myGame.car.speed;
            myGame.coins.splice(i, 1);
        }
    }
    document.getElementById("score").innerHTML = score;
    if (score > 200) {
        myGame.win();
    } else {
        if (crash == true) {
            myGame.stop();
        } else {
            myGame.runSound.play();

            document.getElementById("speed").innerHTML = myGame.car.speed * 10;

            if (background1.yPosition < CANVAS_HEIGHT && background2.yPosition < 0) {
                background1.move();
                background2.move();
            } else {
                background1.yPosition = 0;
                background2.yPosition = 0 - CANVAS_HEIGHT;
            }
            background1.draw(myGame);
            background2.draw(myGame);
            for (let i = 0; i < myGame.coins.length; i++) {
                myGame.coins[i].draw(myGame);
            }
            for (let i = 0; i < myGame.monsters.length; i++) {
                if (myGame.monsters[i].yPosition <= myGame.canvas.height + 100) {
                    myGame.monsters[i].move();
                    myGame.monsters[i].draw(myGame)
                } else {
                    myGame.monsters.splice(i, 1)
                }
            }
            myGame.car.draw(myGame);
        }
    }
}



