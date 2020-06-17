// items de coleta sexo
// pegar todos os li's
const itemsToCollect = $(".items-grid2 li , .condicionamento")
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
document.addEventListener("DOMContentLoaded", function() {
    var loginForm = $("#formulario-login");
    if(loginForm.length) {
        loginForm.submit(function(event) {
            var valorUsuario = usuario.val();
            var valorSenha = senha.val();
            if (valorUsuario == "" || valorSenha == "") {
                event.preventDefault();
                return false;
            }else {
                localStorage.setItem("usuario", valorUsuario);
            }
        })
        var usuario = loginForm.find("[name=usuario]");
        var senha = loginForm.find("[name='senha']");
        var valorUsuario = localStorage.getItem("usuario");
        if (valorUsuario) {
            usuario.val(valorUsuario);
        }
        console.log(valorUsuario);
    }
    var formularioUsuario = $("#formulario-usuario");
    if (formularioUsuario.length) {
        formularioUsuario.submit(function(event) {
            var valorUsuario = usuarioCadastro.val();
            var valorSenha = senhaCadastro.val();
            var valorEmail = emailCadastro.val();
            var valorPassword = passwordCadastro.val();
            var valorItems = itemsCadastro.val();
            if (valorUsuario == "" || valorSenha == "" || valorEmail =="" || valorPassword == "" || valorItems == "") {
                event.preventDefault();
                return false
            }else {
                localStorage.setItem("usuario", valorUsuario);
                localStorage.setItem("senha", valorSenha);
                localStorage.setItem("email", valorEmail);
                localStorage.setItem("password", valorPassword);
                localStorage.setItem("tipo", valorItems);
            }
        })
        var usuarioCadastro = formularioUsuario.find("[name='usuario']");
        var senhaCadastro = formularioUsuario.find("[name='senha']");
        var emailCadastro = formularioUsuario.find("[name='email']");
        var passwordCadastro = formularioUsuario.find("[name='password']");
        var itemsCadastro = formularioUsuario.find("[name='items']");
        var valorUsuario = localStorage.getItem("usuario");
        var valorEmail = localStorage.getItem("email");
        var valorItems = localStorage.getItem("tipo");
        if (valorUsuario) {
            usuarioCadastro.val(valorUsuario);
            emailCadastro.val(valorEmail);
        }
        if (valorItems) {
            itemsCadastro.val(valorItems);
            var toactivate = document.querySelector(".items-grid2 li[data-id='"+valorItems+"']");
            if (toactivate) {
                toactivate.classList.add("selected");
            }
        }
        console.log(valorUsuario);
        console.log(valorEmail);
    }
    var sexoform = $("#formulario-sexo");
    if (sexoform.length) {
        sexoform.submit(function (event){
            var valorItems = itemsCadastro.val();
            if (valorItems == "") {
                event.preventDefault();
                return false
            }else {
                localStorage.setItem("sexo", valorItems);
            }
        })
        var itemsCadastro = sexoform.find("[name='items']");
        var valorItems = localStorage.getItem("sexo");
        if (valorItems) {
            itemsCadastro.val(valorItems);
            var toactivate = document.querySelector(".items-grid2 li[data-id='"+valorItems+"']");
            if (toactivate) {
                toactivate.classList.add("selected");
            }
        }
    }
})