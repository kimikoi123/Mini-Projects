import { onSnake, expandSnake } from './snake.js'
import { randomGrid } from './grid.js'

let food = getRandomPosition()
let EXPAND_SIZE = 5

export function update() {
    let randomPosition = getRandomPosition()
    if (onSnake(food)) {
        expandSnake(EXPAND_SIZE)
        food = randomPosition
    }

}

export function draw(gameBoard) {


    let foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)

}

function getRandomPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGrid()
    }

    return newFoodPosition
}