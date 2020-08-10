//Procurar o botão
document.querySelector("#add-time") /**querySelector seleciona um elemento do html p realizar um evento */
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true ou false //node, em js, se refere a uma tag html. passando o atributo true, a div .schedule-item é copiada com todo seu conteúdo dentro, caso passe false a div o conteúdo copiado vazio (logo, nao vai copiar).
    //newFieldContainer é do tipo constante para que não mude de valor durante a execução dessa função cloneField

    //Pegar os campos do formulário copiado
    const fields = newFieldContainer.querySelectorAll('input')
    
    //Limpar cada campo
    fields.forEach(function(field){
        //Pegar o field do momento e limpa
        field.value = ""
    })
    /** fields[0].value = ""
    fields[1].value = "" */

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer) //com appendChild o node copiado (no caso, div .schedule-item) é colocado na div de id #schedule-items, na página give-classes.html
}