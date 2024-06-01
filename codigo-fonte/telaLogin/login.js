

    function logar(){
        var email = document.getElementById("email").value;
        var senha = document.getElementById("password").value;

        if(email == "teste@outlook.com" && senha == "teste"){
            alert("Sucesso");
        }else{
            alert("Usuário ou senha incorretos");
        }
    }

    //Botão ver senha
    let btn = document.querySelector('.fa-eye')
    btn = addEventListener('click', ()=>{
        let inputPassword = document.querySelector('#senha')
    
        if(inputPassword.getAttribute('type') == 'password'){
            inputPassword.setAttribute('type', 'text')
        } else{
            inputPassword.setAttribute('type', 'password')
        }
    })


