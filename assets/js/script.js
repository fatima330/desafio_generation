let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    let campoNome = document.querySelector('#name');
    let txtNome = document.querySelector('#txtNome');

    if (campoNome.ariaValueMax.length < 3) {
        txtNome.innerHTML = "O nome deve ter no minimo 3 caracteres";
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = '';
    }

    let campoEmail = document.querySelector('#email');
    let txtEmail = document.querySelector('#txtEmail');

    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = "Digite um email valido";
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';
    }

    let campoSubject = document.querySelector('#subject');
    let txtSubject = document.querySelector('#txtSubject');

    if (campoSubject.value.length < 5) {
        txtSubject.innerHTML = "O assunto deve ter no minimo 5 caracteres";
        campoSubject.focus();
        return;
    }else{
        txtSubject.innerHTML = '';
    }

    let campoMessage = document.querySelector('#message');
    alert("Formulario enviado com sucesso!");

    campoNome.value = ''
    campoEmail.value = ''
    campoSubject.value = ''
    campoMessage.value = ''
});