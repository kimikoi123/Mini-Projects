

export function randomGrid() {
    return { 
        x: Math.floor(Math.random() * 21) + 1,
        y: Math.floor(Math.random() * 21) + 1
    }
}

export function outsideGrid(snake) {
    return snake.x > 21 || snake.x < 1 || snake.y > 21 || snake.x < 1
}