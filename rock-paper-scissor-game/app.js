let userCount = 0
let compCount = 0
let userScore_span = document.querySelector(".user-score")
let compScore_span = document.querySelector(".comp-score")
let result_div = document.querySelector(".result > p")
let rockChoice_div = document.getElementById("r")
let paperChoice_div = document.getElementById("p")
let scissorChoice_div = document.getElementById("s")

function converter(letter) {
    if (letter === 'r') return 'Rock'
    if (letter === 'p') return 'Paper'
    if (letter === 's') return 'Scissors'
}

function win(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sup()
    let smallCompWord = "comp".fontsize(3).sup()
    let userChoice_div = document.getElementById(userChoice)
    userCount++
    userScore_span.innerHTML = userCount
    compScore_span.innerHTML = compCount
    result_div.innerHTML = `${converter(userChoice)}${smallUserWord} beats ${converter(computerChoice)}${smallCompWord}. You WIN!`
    userChoice_div.classList.add('green-glow')
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300)
}

function lose(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sup()
    let smallCompWord = "comp".fontsize(3).sup()
    let userChoice_div = document.getElementById(userChoice)
    compCount++
    userScore_span.innerHTML = userCount
    compScore_span.innerHTML = compCount  
    result_div.innerHTML = `${converter(userChoice)}${smallUserWord} loses to ${converter(computerChoice)}${smallCompWord}. You LOSE!`
    userChoice_div.classList.add('red-glow')
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300)
}

function draw(userChoice, computerChoice) {
    let smallUserWord = "user".fontsize(3).sup()
    let smallCompWord = "comp".fontsize(3).sup()
    let userChoice_div = document.getElementById(userChoice)
    userScore_span.innerHTML = userCount
    compScore_span.innerHTML = compCount
    result_div.innerHTML = `${converter(userChoice)}${smallUserWord} equals to ${converter(computerChoice)}${smallCompWord}. It's a draw!`
    userChoice_div.classList.add('gray-glow')
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300)
}

function getComputerChoice() {
    let choices = ['r', 'p', 's']
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function game(userChoice) {
    let computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice)
            break
    }
}

function main() {
    rockChoice_div.addEventListener('click', () => game("r"))
    paperChoice_div.addEventListener('click', () => game("p"))
    scissorChoice_div.addEventListener('click', () => game("s")) 
}

main()  