function validacao2(){
    let nome2 = document.getElementById("c_nome");
    let telefone2 = document.getElementById("c_telefone"); 
    let foto = document.getElementById("c_foto");

    estilo_input(nome2, "#f45656", "#808080");
    estilo_input(telefone2, "#f45656", "#808080");
    estilo_input(foto, "#f45656", "#808080");
}

function estilo_input(input, cor_1, cor_2){

    var alerta = document.getElementById("c_alert");

    if(!input.checkValidity()){
        alerta.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        
        // var alerta = document.getElementById("c_alert2");
        alerta.style.display = "block";
        return input.style.border = `1px solid ${cor_2}`;
        
    }
}