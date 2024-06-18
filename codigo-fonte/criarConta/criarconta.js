//Variáveis
let etiquetaEmail = document.querySelector('#etiquetaEmail');
let email = document.querySelector('#email');
let validarEmail = false

let etiquetaUsuario = document.querySelector('#etiquetaUsuario')
let usuario = document.querySelector('#usuario')
let validarUsuario = false

let etiquetaSenha = document.querySelector('#etiquetaSenha')
let password = document.querySelector('#password')
let validarSenha = false

let etiquetaConfirmaSenha = document.querySelector('#etiquetaConfirmaSenha')
let confirmaSenha = document.querySelector('#confirmaSenha')
let validarConfirmaSenha = false

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')



btnConfirma = addEventListener('click', () => {
    let inputConfirmaSenha = document.querySelector('#confirmaSenha')

    if(inputConfirmaSenha.getAttribute('type') == 'password'){
        inputConfirmaSenha.setAttribute('type', '')
    } else{
        inputConfirmaSenha.setAttribute('type', 'password')
    }
})    

usuario.addEventListener('keyup', () => {
    if(usuario.value.length <= 4){
        etiquetaUsuario.setAttribute('style', 'color: red')
        etiquetaUsuario.innerHTML = 'Insira o usuário com no mínimo 4 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validarUsuario = false
    }else {
        etiquetaUsuario.setAttribute('style', 'color: green')
        etiquetaUsuario.innerHTML = 'usuario'
        usuario.setAttribute('style', 'border-color: black')
        validarUsuario = true
    }
})

password.addEventListener('keyup', () => {
    if(password.value.length <= 4){
        etiquetaSenha.setAttribute('style', 'color: red')
        etiquetaSenha.innerHTML = 'Insira uma senha com no mínimo 4 caracteres'
        password.setAttribute('style', 'border-color: red')
        validarSenha = false
    }else {
        etiquetaSenha.setAttribute('style', 'color: green')
        etiquetaSenha.innerHTML = 'Senha'
        password.setAttribute('style', 'border-color: black')
        validarSenha = true
    }
})

confirmaSenha.addEventListener('keyup', () => {
    if(password.value != confirmaSenha.value){
        etiquetaConfirmaSenha.setAttribute('style', 'color: red')
        etiquetaConfirmaSenha.innerHTML = 'As senhas não conferem'
        confirmaSenha.setAttribute('style', 'border-color: red')
        validarConfirmaSenha = false
    }else {
        etiquetaConfirmaSenha.setAttribute('style', 'color: green')
        etiquetaConfirmaSenha.innerHTML = 'Confirmar Senha'
        confirmaSenha.setAttribute('style', 'border-color: black')
        validarConfirmaSenha = true
    }
})

//Botão Criar
function criar(){
    if(validarUsuario && validarSenha && validarConfirmaSenha){

        let listUsuario = JSON.parse(localStorage.getItem('listUsuario') || '[]');

        listUsuario.push(
            {
                emailUser: email.value,
                usuarioUser: usuario.value,
                senhaUser: password.value              
            }
        );       

        localStorage.setItem('listUsuario', JSON.stringify(listUsuario));   

        msgSucesso.setAttribute('style', 'display: inline-block');
        msgSucesso.innerHTML = 'Conta criada com sucesso!'
        msgErro.setAttribute('style', 'display: none');
        msgErro.innerHTML = ''

        setTimeout( () =>{
            window.location.href = 'http://127.0.0.1:5500/codigo-fonte/telaLogin/login.html'
        }, 3000);
    }else{
        msgErro.setAttribute('style', 'display: block')
        msgErro.innerHTML = 'Favor preencher todos os campos corretamente!'
        msgSucesso.setAttribute('style', 'display: none')
        msgSucesso.innerHTML = ''
    }

}