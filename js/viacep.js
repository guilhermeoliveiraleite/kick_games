function limpa_formulario(){
    document.getElementById("i_rua").value = "";
    document.getElementById("i_bairro").value = "";
    document.getElementById("i_cidade").value = "";
    document.getElementById("i_estado").value = "";

}

function atualiza_formulario(conteudo){
    if(!("erro" in conteudo)){

        document.getElementById("i_rua").value = (conteudo.logradouro);
        document.getElementById("i_bairro").value = (conteudo.bairro);
        document.getElementById("i_cidade").value = (conteudo.localidade);
        document.getElementById("i_estado").value = (conteudo.uf);

    }else{
        limpa_formulario();
        alert("Cep não encontrado!");
    }

}

function pesquisa_cep(valor){
    // nova variavel somente com digitos.
    var cep = valor.replace(/\D/g, "");

    if(cep != ""){


        // expressão regular para validar o cep
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){
            document.getElementById("i_rua").value = ("...");
            document.getElementById("i_bairro").value = ("...");
            document.getElementById("i_cidade").value = ("...");
            document.getElementById("i_estado").value = ("...");

            var script = document.createElement("script");
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=atualiza_formulario`;

            document.body.appendChild(script);

        }else{
            limpa_formulario();
            alert("Formato do CEP inválido");
        }

    }else{
        limpa_formulario();
        alert("O Campo CEP não foi preenchido!");
    }

}