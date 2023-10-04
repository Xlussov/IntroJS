const firstnName = prompt('Ваше імя`я ?')
alert(`Привіт, ${firstnName}`)

const userbAge = +prompt('Ваш рік народження ?')
let userAge = 2023 - userbAge
alert(`Вам ${userAge} років`)

const s = +prompt('Сторона квадрата')
let S = s * 4
alert(`S = ${S}`) 

const r = +prompt('Радіус кола')
let Sr = (r ** 2) * 3.14
alert(`S = ${Sr}`) 


const firstS = +prompt('Відстань у кілометрах між двома містами')
const time = +prompt('Час у год.')
let sum = firstS / time
alert(`Швидкість повиння бути ${sum} км/ч`)


const usd = +prompt('Доллари')
let eur = 0.95 * usd
let ok = Math.round(parseFloat(eur) * 100) / 100
alert(`${usd} Доллара = ${ok} Эвро`)


