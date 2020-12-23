const COLS = 20;
const ROWS = 20;
const CELL_SIZE = 40;
const O_PLAYER = 2;
const X_PLAYER = 1;
const NONE = 0;

function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.value = NONE;
    this.getHtml = function () {
        var top = x * CELL_SIZE;
        var left = y * CELL_SIZE;
        var cellHtml = '<div id="cell-' + this.x + '-' + this.y + '" onclick="play(' + this.x + ',' + this.y + ')" class="cell" style="position: absolute; width: ' +
            CELL_SIZE + 'px; height:' +
            CELL_SIZE + 'px; left:' +
            left + 'px; top:' +
            top + 'px; line-height: ' +
            CELL_SIZE + 'px;"></div>';
        return cellHtml;
    }
    this.draw = function () {
        var cellDiv = document.getElementById("cell-" + this.x + "-" + this.y);
        switch (this.value) {
            case X_PLAYER:
                cellDiv.innerHTML = "X";
                cellDiv.style.color = "red";
                ora.play();
                break;
            case O_PLAYER:
                cellDiv.innerHTML = "O";
                muda.play();
                break;
            default:
                cellDiv.innerHTML = "";
                break;
        }
    }
}

function Board(rows, cols, eleID) {
    this.rows = rows;
    this.cols = cols;
    this.eleID = eleID;
    this.turn = O_PLAYER;
    this.cells = [];
    this.win = false;

    this.init = function () {
        let boardDiv = document.getElementById(this.eleID);
        boardDiv.innerHTML = '';
        for (let i = 0; i < this.rows; i++) {
            let row = [];
            for (let j = 0; j < this.cols; j ++) {
                let cell = new Cell(i, j);
                row.push(cell);
                boardDiv.innerHTML += cell.getHtml();
            }
            this.cells.push(row);
        }
    }
    this.play = function (x, y) {
        if (this.win) {
            return;
        }
        let cell = this.cells[x][y];
        if (cell.value == NONE) {
            cell.value = this.turn;
            cell.draw();
            this.checkWin(x, y);
            if (this.turn == O_PLAYER) {
                this.turn = X_PLAYER
            } else {
                this.turn = O_PLAYER
            }
        } else {
            alert("Cell is not empty");
        }
    }
    this.end = function (count) {
        if (count >= 5) {
            this.win = true;
            if (this.turn == O_PLAYER) {
                alert("Player O win!");
            } else {
                alert("Player X win!")
            }
        }
    }
    this.checkWin = function (x, y) {
        let cell = this.cells[x][y];
        //Vertical
        let count = 1;
        let i = 1;
        while (y + i < this.rows && this.cells[x][y + i].value == cell.value) {
            count ++;
            i ++;
        }
        i = 1;
        while ( y - i >= 0 && this.cells[x][y - i].value == cell.value) {
            count ++;
            i ++;
        }
        this.end(count);
        //Horizontal
        count = 1;
        i = 1;
        while (x + i < this.cols && this.cells[x + i][y].value == cell.value) {
            count ++;
            i ++;
        }
        i = 1;
        while ( x - i >= 0 && this.cells[x - i][y].value == cell.value) {
            count ++;
            i ++;
        }
        this.end(count);
        //Left diagonal
        count = 1;
        i = 1;
        while (y + i < this.rows && x + i < this.cols && this.cells[x + i][y + i].value == cell.value) {
            count ++;
            i ++;
        }
        i = 1;
        while (y - i >= 0 && x - i >= 0 && this.cells[x - i][y - i].value == cell.value) {
            count ++;
            i ++;
        }
        this.end(count);
        //RIght diagonal
        count = 1;
        i = 1;
        while (y - i < this.rows && x + i < this.cols && this.cells[x + i][y - i].value == cell.value) {
            count ++;
            i ++;
        }
        i = 1;
        while (y + i >= 0 && x - i >= 0 && this.cells[x - i][y + i].value == cell.value) {
            count ++;
            i ++;
        }
        this.end(count);
    }
}

let gameBoard = new Board(COLS, ROWS, "board");
let music = new Audio("resources/goldenwind.mp3");
let ora = new Audio("resources/ora.mp3");
let muda = new Audio("resources/muda.mp3");
music.volume = 0.1;
ora.volume = 0.1;
muda.volume = 0.3;

gameBoard.init();
function play (x, y) {
    gameBoard.play(x, y);
    music.play();
}