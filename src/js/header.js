let burger = document.querySelector('.burger')
let headerNav = document.querySelector('.header__nav')
let headerContact = document.querySelector('.header__contact')

burger.onclick =function () {
    burger.classList.toggle('burger_active')
    headerNav.classList.toggle('header__nav_active')
    headerContact.classList.toggle('header__contact_active')
}