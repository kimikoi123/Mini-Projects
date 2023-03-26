import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'


let inputRender = 0
let gameOver = false
const gameBoard  = document.getElementById('game-board')


function main (currentTime) {
    if (gameOver) {
        if (confirm('YOU LOSE! Press Ok to restart')) {
            window.location = '/'
        }
        return
    }
    window.requestAnimationFrame(main)
    let sinceLastRender = (currentTime -  inputRender) / 1000 
    if (sinceLastRender < 1 /  SNAKE_SPEED) return
    inputRender = currentTime
    

    update ()
    draw ()
}

window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath() {
    gameOver = outsideGrid(snakeHead()) || snakeIntersection()
}