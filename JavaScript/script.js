console.log('javascript carregado!');
//alert ('javascript carregado!') aparece um pop up na pagina com a msg
// prompt () aparece um pop up com a msg e um campo para colocar um valor



function validacao () {
    //console.log ('iniciando validacao CPF');
    let cpf = document.getElementById('cpf_digitado').value;
    document.getElementById('success').style.display ='none';
    document.getElementById('error').style.display ='none';
    
    //console.log(cpf); verificando se esta lendo o CPF

    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
        document.getElementById('success').style.display = 'block'; //não precisou se preocupar com o '!important' pois não é execução.
    } else {
        document.getElementById('error').style.display = 'block';
    }

    function validaCPF () {
        //return false; só para ter um retorno para a função fazer o program funcionar (T/F)
        console.log(cpf.length)
        if(cpf.length != 11) {
            return false;

        } else {
            let numeros = cpf.substring(0, 9); // substring e similar ao extrair texto do excel
            let digitos = cpf.substring(9);
    

            // PODEMOS CONSIDERAR A STRING COMO UMA LISTA COM CARACTERES EXCLUSIVOS
            let soma = 0;
            for (let i = 10; i > 1; i--) {
                soma += numeros.charAt(10 -i) * i;

                console.log(soma);

                let resultado = (soma % 11) < 2 ? 0 : (soma % 11); /* operador ternário onde faz uma operação e um IF: a pergunta com '?'
                 o true entre "?" e ":" e false após ":" */
                
                 if (resultado != digitos.charAt(0)) {
                     return false;
                 }

                 console.log(digitos.toString().charAt(0) + " é a primeira variavel soma")

                 
            return true;

        
            }
        }
    
        
    
    }


}