// items de coleta sexo
    // pegar todos os li's
    const itemsToCollect = $(".items-grid2 li")
    
    itemsToCollect.click(handleSelectItem)

    const collectedItems = document.querySelector("input[name=items]")
    let selectedItems = false;

    // criando a função
    // sabendo que quando o evento é disparado ele passa pra dentro da função um evento
    function handleSelectItem(event) {
    
        //target é cada um do li que está criando
        const itemLi = $(this).get(0);
        
        
        //dataset.id coloca só os numeros
        const itemId = itemLi.dataset.id
        
        
        // verificar se existem itens selecionados, se sim
        // pegar os itens selecionados
        
        const alreadySelected = selectedItems == itemId;
        var last = document.querySelector(".items-grid2 li.selected");
        if (last) {
            last.classList.remove("selected");
        }
        
        // se já estiver selecionado
        if (alreadySelected) { // se o already for maior ou igual a 0 verdadeiro
            
            itemLi.classList.remove("selected");
            selectedItems = false;
            
        }
        
        
        //se não estiver selecionado
        else {
            // adicionar ou remover uma classe com javascript
            //toggle = adicionar ou remover 
            itemLi.classList.add("selected")
            // adicionar a seleção
            selectedItems = itemId;
        }

        // atualizar o campo escondido com os itens selecionados
        // código de atualizar , mas está la em cima const collectedItems = document.querySelector("input[name=items]")

        collectedItems.value = selectedItems //sempre atualizar
        
    }