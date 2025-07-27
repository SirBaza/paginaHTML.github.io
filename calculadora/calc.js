function calculadora()
{
    let conta = "" //basicamente uma string que vamos armazenar os valores que estão presentes em cada botão que nós apertamos. Dessa forma, consequiremos fazer uma expressão matemática.
    const resultado = document.getElementById("calc-output"); //aqui estamos capturando o elemento do html que corresponde ao visor de saída do resultado.
    const botoes = document.querySelectorAll('input[type="button"]');//aqui estamos captutando todos os botões da calculadora;
    botoes.forEach(function(botao){
        botao.onclick = function() //ao clicar no botão
        {
            const valor = botao.value//atribuir ao valor dele.Vai aparecer o valor dele no visor.
            if(valor === "C")
            {
                conta = ""
                resultado.innerHTML = "0"
            }
            else if(valor === "=")
            {
                conta = eval(conta).toString() //conta é uma string. a expressão que a gente escreveu no visor, por ex: "1+2+3" é uma string, e o eval pega essa string e executa o código em javastript, ou seja, ele faz a conta. O resultado irá sair em number, então utilizamos o toString para converter o resultado para string novamente.
                resultado.innerHTML = conta
            }
            else if(valor !== "C" && valor !== "=" && valor !== " ")
            {
                conta += valor
                resultado.innerHTML = conta
            }
        }
    })//para cada botão na nossa lista de botões.
    
}
calculadora()
