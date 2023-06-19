const form = document.getElementById('orderForm')
form.addEventListener('submit', function(ev) {
ev.preventDefault()
const name = document.querySelector('input[name="name"]').value
const address = document.querySelector('input[name="address"]').value
const breadType = document.querySelector('select[name="breadType"]').value
const main = document.querySelector('input[name="main"]:checked').value
const observations = document.querySelector('textarea[name="observations"]').value

let salad = []
document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
    salad.push(item.value)
})

//cria uma vírgula entre os escolhidos no checkbox
salad = salad.join(', ')
console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
})
alert(`
Pedido realizado!
\nNome do cliente: ${name}
\nEndereço de entrega: ${address}
\nTipo de pão: ${breadType}
\nRecheio: - ${main}
\nSalada: ${salad}
\nObservações: ${observations}`)
})

document.querySelector('input[name="name"]').value = ''