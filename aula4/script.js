function show() {
    const contactList = document.getElementById('contact-list')
    console.log(contactList)

    const listElements = document.getElementsByTagName('li')
    console.log(listElements)

    const contactInput = document.getElementsByClassName('contact-input')
    console.log(contactInput)

    const contato = document.querySelector('#contact-list > li > label')
    console.log(contato)
}