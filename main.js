const modal = document.querySelector('.modal');
const register = document.querySelector('.js-register');
const login = document.querySelector('.js-login')
const modalBody = document.querySelector('.js-modal-body')
const authFormRegister = document.querySelector('.js-auth-form-register');
const authFormLogin = document.querySelector('.js-auth-form-login');
const swithLogin = document.querySelector('.js-login-btn');
const swithRegister = document.querySelector('.js-register-btn');
const showPasswords = document.querySelectorAll('.eye-password');



register.addEventListener('click', function() {
    modal.classList.add('open-modal')
    authFormRegister.classList.add('open-auth-form')
})


login.addEventListener('click', function() {
    modal.classList.add('open-modal')
    authFormLogin.classList.add('open-auth-form')
})

modal.addEventListener('click', function() {
    modal.classList.remove('open-modal')
    authFormRegister.classList.remove('open-auth-form')
    authFormLogin.classList.remove('open-auth-form')
})


authFormRegister.addEventListener('click', function(e) {
    e.stopPropagation()
})

authFormLogin.addEventListener('click', function(e) {
    e.stopPropagation()
})

swithLogin.addEventListener('click', function(e) {
    // authFormRegister.classList.add('open-auth-form')
    authFormLogin.classList.remove('open-auth-form')
})

// swithRegister.addEventListener('click', function() {
//     authFormLogin.classList.add('open-auth-form')
//     authFormRegister.classList.remove('open-auth-form')
// 




function showPassword(e) {
    const mks = document.querySelectorAll('.mk')
    for (var mk of mks) {
        mk.type = (mk.type === "password")? "text":"password";
    }
}

    for(var eye of showPasswords) {
        eye.addEventListener('click', showPassword)
    }