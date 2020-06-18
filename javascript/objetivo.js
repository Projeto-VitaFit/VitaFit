// items de coleta sexo
// pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid3 li")
// add o ouvidor de eventos / click
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectItem)
}
const collectedItems = document.querySelector("input[name=items]")
// quais são os itens selecionados, coleção = aray
// criando a função
// sabendo que quando o evento é disparado ele passa pra dentro da função um evento
function handleSelectItem(event) {
    let selectedItems = collectedItems.value.split(",")
    //target é cada um do li que está criando
    const itemLi = event.target
    // adicionar ou remover uma classe com javascript
    //toggle = adicionar ou remover 
    itemLi.classList.toggle("selected")
    //dataset.id coloca só os numeros
    const itemId = itemLi.dataset.id
    // verificar se existem itens selecionados, se sim
    // pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex( item =>  {
        const itemFound = item == itemId // isso sera true ou false
        return itemFound
    //fica rodando até que ache o item verdadeiro
    //findIndex pega o item(1) e verifica colocando de um lado o item 1 e o outro itemId, == significa que tá comparando valor
    })
    // se já estiver selecionado
    if( alreadySelected >= 0 ) { // se o already for maior ou igual a 0 verdadeiro
        // tirar da seleção
        const filteredItems = selectedItems.filter ( item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent // quando o retorno for false vai ser retirado do aray
        })
        selectedItems = filteredItems
    }
    //se não estiver selecionado
    else {
        // adicionar a seleção
        selectedItems.push(itemId)
    }
    // atualizar o campo escondido com os itens selecionados
    // código de atualizar , mas está la em cima const collectedItems = document.querySelector("input[name=items]")
    selectedItems = selectedItems.filter ( item => {
        return !item == false // quando o retorno for false vai ser retirado do aray
    })
    collectedItems.value = selectedItems.join(",") //sempre atualizar
}
document.addEventListener("DOMContentLoaded", function() {
    var objetivoform = $("#formulario-objetivo");
    if (objetivoform.length) {
        objetivoform.submit(function (event){
            var valorItems = itemsCadastro.val();
            if (valorItems == "") {
                event.preventDefault();
                return false
            }else {
                // localStorage.setItem("objetivo", valorItems);
                forma  = false
                tonificado = false
                perderpeso = false
                valorItems.split(",").forEach(function(element) {
                    if(element == "forma") {
                        forma = true;
                    }else if (element == "tonificado") {
                        tonificado = true;
                    }else if(element == "perderpeso") {
                        perderpeso = true;
                    }
                });
                localStorage.setItem("forma", forma?1:0);
                localStorage.setItem("tonificado", tonificado?1:0);
                localStorage.setItem("perderpeso", perderpeso?1:0);
            }
        })
        var itemsCadastro = objetivoform.find("[name='items']");
        var valueitems = [];
        var forma  = JSON.parse(localStorage.getItem("forma"));
        if(forma) {
            valueitems.push("forma");
            var toactivate = document.querySelector(".items-grid3 li[data-id='forma']");
            if (toactivate) {
                // toactivate.classList.add("selected");
            }
        }
        var tonificado = JSON.parse(localStorage.getItem("tonificado"));
        if(tonificado) {
            valueitems.push("tonificado");
            var toactivate = document.querySelector(".items-grid3 li[data-id='tonificado']");
            if (toactivate) {
                // toactivate.classList.add("selected");
            }
        }
        var perderpeso = JSON.parse(localStorage.getItem("perderpeso"));
        if(perderpeso) {
            valueitems.push("perderpeso");
            var toactivate = document.querySelector(".items-grid3 li[data-id='perderpeso']");
            if (toactivate) {
                // toactivate.classList.add("selected");
            }
        }
        itemsCadastro.val(valueitems.join(","));
    }
})