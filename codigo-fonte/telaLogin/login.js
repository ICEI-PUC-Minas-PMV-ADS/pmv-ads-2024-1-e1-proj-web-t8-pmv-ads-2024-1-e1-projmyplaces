

    function logar(){
        let email = document.querySelector('#email')
        let labelEmail = document.querySelector('#labelEmail')
        let password = document.querySelector('#password')
        let labelPassword = document.querySelector('#labelPassword')
        let msgErro = document.querySelector('#msgErro')

        /*let lista = []*/
        let validUsuario = {
            email: '',
            password: ''            
        }

        let lista = JSON.parse(localStorage.getItem('listUsuario'))

        lista.forEach((item) => {
            if(email.value == item.emailUser && password.value == item.senhaUser){
                validUsuario = {
                    email: item.emailUser,
                    password: item.senhaUser                
                }
            }
        })
        listausuario = JSON.stringify(validUsuario)

        if(email.value === validUsuario.email && password.value === validUsuario.password){
            alert('funcionou')

        } else
        {
            labelEmail.setAttribute('style', 'color: red')
            email.setAttribute('style', 'border-color: red')
            labelPassword.setAttribute('style', 'color: red')
            password.setAttribute('style', 'border-color: red')
            msgErro.setAttribute('style', 'display: block')
            msgErro.innerHTML = 'Usuário ou senha incorretos'                          
            
        }
    
    }
