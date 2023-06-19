function addPlayer() {
    const position = document.getElementById('position')
    const name = document.getElementById('name')
    const shirtNumber = document.getElementById('shirtNumber')

    console.log({position, name, shirtNumber})

    const confirmation = confirm(`Escalar ${name.value} como ${position.value} no número ${shirtNumber.value}?`)

    if (confirmation) {
        const lineUp = document.getElementById('lineUp')
        const playerItem = document.createElement('li')
        playerItem.id = `player-${shirtNumber.value}`
        playerItem.innerText = `${position.value}: ${name.value} (${shirtNumber.value})`
        lineUp.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('shirtNumber').value = ''
    }
}

function deletePlayer() {
    const shirtNumber = document.getElementById('numberToRemove')
    const playerToRemove = document.getElementById(`player-${shirtNumber.value}`)

    const confirmation = confirm(`
    Remover o jogador ${playerToRemove.innerText}?`)

    if (confirmation) {
        playerToRemove.remove()
        //document.getElementById('lineUp').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}