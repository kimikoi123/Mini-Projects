let celsius_div = document.querySelector('.celsius > input')
let fahrenheit_div = document.querySelector('.fahrenheit > input')
let kelvin_div = document.querySelector('.kelvin > input')

function celsiusToFandK() {
    let cTemp = parseFloat(celsius_div.value)
    let fTemp = (cTemp * (9/5)) + 32
    let kTemp = cTemp + 273.15
    fahrenheit_div.value = Math.round(fTemp * 100) / 100
    kelvin_div.value =  Math.round(kTemp * 100) / 100
}

function fahrenheitToCandK() {
    let fTemp = parseFloat(fahrenheit_div.value)
    let cTemp = (fTemp -32) * 5/9
    let kTemp = (fTemp - 32) * 5/9 + 273.15
    celsius_div.value = Math.round(cTemp * 100) / 100
    kelvin_div.value =  Math.round(kTemp * 100) / 100
}

function kelvinToCandF() {
    let kTemp = parseFloat(kelvin_div.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * 9/5 + 32
    celsius_div.value = Math.round(cTemp * 100) / 100
    fahrenheit_div.value =  Math.round(fTemp * 100) / 100
}

function main () {
    celsius_div.addEventListener('input', celsiusToFandK)
    fahrenheit_div.addEventListener('input', fahrenheitToCandK)
    kelvin_div.addEventListener('input', kelvinToCandF)
}

main()
