function cadastraUser() {
    var nome = document.getElementById("txtNome").value;
    var email = document.getElementById("txtEmail").value;

    if (nome.length == 0) {
        document.getElementById("txtNome").style.border = "1px solid red";
        document.getElementById("error-nome").style.display = "block";
        
    }
    else {
        document.getElementById("txtNome").style.border = "1px solid #ccc";
        document.getElementById("error-nome").style.display = "none";
    }
    if (email.length == 0) {
        document.getElementById("txtEmail").style.border = "1px solid red";
        document.getElementById("error-email").style.display = "block";
    }
    else {
        document.getElementById("txtEmail").style.border = "1px solid #ccc";
        document.getElementById("error-email").style.display = "none"
    }
    if (nome.length != 0 && email.length != 0) {
        document.getElementById("txtNome").value = ""
        document.getElementById("txtEmail").value = ""
        alert("Cadastrado com sucesso!")
    }
}