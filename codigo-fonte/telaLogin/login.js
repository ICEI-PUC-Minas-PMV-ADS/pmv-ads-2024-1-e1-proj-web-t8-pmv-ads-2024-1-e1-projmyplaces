

    function logar(){
        var email = document.getElementById("email").value;
        var senha = document.getElementById("password").value;

        if(email == "teste@outlook.com" && senha == "teste"){
            alert("Sucesso");
        }else{
            alert("Usuário ou senha incorretos");
        }
    }

    //armazenar os dados no LocalStorage//
    function dados(){
        localStorage.info = document.getElementById("email".value);
    }
    


