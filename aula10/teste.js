let number1 = Number(prompt('Digite um número'))
let numberBackAndFront = Math.round(number1)

alert(`
Número atual: ${number1}
Número anterior: ${numberBackAndFront - 1}
Número posterior: ${numberBackAndFront + 1}`)