const modal = document.getElementById('modal')
const modalTitle = document.getElementById('modal-title')
const modalImage = document.getElementById('modal-image')
const modalInfo = document.getElementById('modal-info')
const modalLink = document.getElementById('modal-link')
const modalClose = document.getElementById('modal-close')
const project1 = document.getElementById('project-1')
const project2 = document.getElementById('project-2')
const project3 = document.getElementById('project-3')

// Create Modal
project1.addEventListener('click', () => {
    modal.style.display = 'block'
    modalTitle.innerText = 'GZone Online Store'
    modalImage.src = './img/gzone.png'
    modalInfo.innerText = `
        Gzone is an online platform for buying your favorite video games. Features include user authentication, product pages, cart 
        functionality, review system, admin portal etc.
        `
    modalLink.href = 'https://github.com/NoobProgrammerRoy/gzone-online-store'
})

project2.addEventListener('click', () => {
    modal.style.display = 'block'
    modalTitle.innerText = 'MyPass Password Vault'
    modalImage.src = './img/mypass.png'
    modalInfo.innerText = `
        MyPass is a password vault designed to generate strong custom passwords as well securely store them. MyPass uses a custom password 
        generator to generate strong passwords behind-the-scenes.
    `
    modalLink.href = 'https://github.com/NoobProgrammerRoy/mypass-password-vault'
})

project3.addEventListener('click', () => {
    modal.style.display = 'block'
    modalTitle.innerText = 'Movie Ticket API'
    modalImage.src = './img/movie-api.jpg'
    modalInfo.innerText = `
    A fake movie ticket api that aims to resemble the working of an actual ticket booking system. Features include allowing users to save
    movie records as well as save ticket records for these movies. Has CRUD functionality as well as movie validations.
    `
    modalLink.href = 'https://github.com/NoobProgrammerRoy/movie-ticket-api'
})

// Remove Modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none'
})

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
})