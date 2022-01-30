import Modal from './modal.js'

const modal = Modal()

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
    //Adicionar a escuta nos botões

    button.addEventListener('click', event => {
        modal.open()
    })
})