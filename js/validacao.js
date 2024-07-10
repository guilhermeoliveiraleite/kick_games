function validacao(){
    let nome = document.getElementById("i_nome");
    let telefone = document.getElementById("i_telefone");
    let cep = document.getElementById("i_cep");
    

    estilo_input(nome, "#f45656", "#808080");
    estilo_input(telefone, "#f45656", "#808080");
    estilo_input(cep, "#f45656", "#808080");
    

}

function estilo_input(input, cor_1, cor_2){

    var alert = document.getElementById("f_alert");

    if(!input.checkValidity()){
        alert.style.display = "block";
        return input.style.border = `3px solid ${cor_1}`;
    }else{
        
       // var alert = document.getElementById("f_alert2");
        alert.style.display = "block";
        return input.style.border = `1px solid ${cor_2}`;
       
        
    }
}

