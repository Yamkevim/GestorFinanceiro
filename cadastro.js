
        var usuarios = [
            {"login": "master@123", "senha": "1"},
            {"login": "user1", "senha": "1"},
            {"login": "user2", "senha": "2"},
        ];
        
        function valida(senha) {
            let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;
            if (regex.test(senha)) {
                console.log(senha, '= válida');
            } else {
                console.log(senha, '= inválida');
            }
        }
        
        ['a@1', 'abc@123', 'aab@123'].forEach(s => valida(s));
        
        
        function Login() {
            var usuario = document.getElementsByName('username')[0].value.toLowerCase();
            var senha = document.getElementsByName('password')[0].value;
        
            for (var u in usuarios) {
                var us = usuarios[u];
                if (us.login === usuario && us.senha === senha) {
                   
                    return true;
                }
            }
            alert("Usuário ou senha incorreta, tente novamente.");
            return false;
        }
        