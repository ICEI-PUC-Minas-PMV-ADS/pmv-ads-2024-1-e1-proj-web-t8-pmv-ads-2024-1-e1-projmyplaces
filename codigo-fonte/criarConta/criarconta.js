//Variáveis
let btnMostrar = document.querySelector('#mostrarSenha')
let btnConfirma = document.querySelector('#mostrarConfirmaSenha')

let etiquetaNome = document.querySelector('#etiquetaNome')
let nome = document.querySelector('#nome')

let etiquetaUsuario = document.querySelector('#etiquetaUsuario')
let usuario = document.querySelector('#usuario')

let etiquetaSenha = document.querySelector('#etiquetaSenha')
let senha = document.querySelector('#senha')

let etiquetaConfirmaSenha = document.querySelector('#etiquetaConfirmaSenha')
let confirmaSenha = document.querySelector('#confirmaSenha')

//Botão mostra e esconde senha
btnMostrar = addEventListener('click', ()=>{
    let inputMostrar = document.querySelector('#senha')

    if(inputMostrar.getAttribute('type') == 'password'){
        inputMostrar.setAttribute('type', 'text')
    } else{
        inputMostrar.setAttribute('type', 'password')
    }
})

btnConfirma = addEventListener('click', ()=>{
    let inputConfirmaSenha = document.querySelector('#confirmaSenha')

    if(inputConfirmaSenha.getAttribute('type') == 'password'){
        inputConfirmaSenha.setAttribute('type', 'text')
    } else{
        inputConfirmaSenha.setAttribute('type', 'password')
    }
})

//Validação dos campos
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        etiquetaNome.setAttribute('style', 'color: red')
    }else {
        etiquetaNome.setAttribute('style', 'color: green')
    }
})
    

//Botão Criar
/*function criar(){
    alert('botão clicado')
}*/