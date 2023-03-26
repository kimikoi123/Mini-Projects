import { getInputDirection } from './input.js'


let newSegment = 0
let snakeBody = [ { x: 11, y: 11 } ]
export const SNAKE_SPEED = 10



export function update() {
    addSegment()
    let inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(element => {
        let snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = element.y
        snakeElement.style.gridColumnStart = element.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    });

}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((element, index) => {
        if (ignoreHead && index === 0 ) return false
        return checkPosition(element, position)
    })
}

export function expandSnake(amount) {
    newSegment += amount
}

export function snakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function checkPosition (pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegment() {
    for (let i = 0; i < newSegment; i++) {
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }
    newSegment = 0
}
