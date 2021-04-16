// menu-btn класс на кнопке бургера

document.querySelector('.menu-btn').addEventListener('click', () => {
    // toggle() добавляет класс если его нет и удаляет если он есть
    document.querySelector('.menu-btn').classList.toggle('active')
    document.querySelector('.header_menu').classList.toggle('active')
    document.querySelector('.header__nav').classList.toggle('active')
    document.querySelector('.header__log_nav').classList.toggle('active')
})

document.querySelectorAll('.header_menu_item').forEach((oneLink) => {
    oneLink.addEventListener('click', () => {
        document.querySelector('.menu-btn').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active')
    })
})