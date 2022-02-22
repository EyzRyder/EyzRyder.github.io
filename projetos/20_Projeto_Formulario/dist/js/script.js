function validar() {
    var nome = formuser.nome.value;
    var email = formuser.email.value;
    var password = formuser.password.value;
    if (nome == "") {
        alert('Preencha o campo nome.');
        formuser.nome.focus();
        return false;
    }
    if (email == "") {
        alert('Preencha o campo email.');
        formuser.email.focus();
        return false;
    }
    if (password == "") {
        alert('Preencha o campo senha com no minimo de 8 caracter.');
        formuser.password.focus();
        return false;
    }
}