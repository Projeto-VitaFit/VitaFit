function previewImagem() {
    var imagem = document.querySelector('input[name=imagem]').files[0];
    var preview = $('.foto-perfil');
    var reader = new FileReader();
    reader.onloadend = function(){
        preview.attr("src", reader.result);
        
        if (window.localStorage) {
            localStorage.setItem("foto-perfil", reader.result);
        }
    }
    if (imagem) {
        reader.readAsDataURL(imagem);
    }else {
        preview.attr("src", "");
    }
}
document.addEventListener("DOMContentLoaded", function() {
    console.log("iniciou");
    updadefotoperfil();
})
function updadefotoperfil() {
    if (window.localStorage) {
        var url = localStorage.getItem("foto-perfil");
        var preview = $('.foto-perfil');
        if(url && preview.length) {
            preview.attr("src", url);
        }
    }
}
function dispensar3() {
    $('#professor1').show(300);
    $('#professor2').hide(300);
    $('#professor3').hide(300);
}
function dispensar2() {
    $('#professor1').hide(300);
    $('#professor2').hide(300);
    $('#professor3').show(300);
}
function dispensar1() {
    $('#professor1').hide(300);
    $('#professor2').show(300);
    $('#professor3').hide(300);
}
function ativar3() {
    alert("o professor foi adicionado a sua lista, enviamos uma mensagem para ele saber que voce esta interessado em treinar!!!");
    $('#professor1').show(300);
    $('#professor2').hide(300);
    $('#professor3').hide(300);
}
function ativar2() {
    alert("o professor foi adicionado a sua lista, enviamos uma mensagem para ele saber que voce esta interessado em treinar!!!");
    $('#professor1').hide(300);
    $('#professor2').hide(300);
    $('#professor3').show(300);
}
function ativar1() {
    alert("o professor foi adicionado a sua lista, enviamos uma mensagem para ele saber que voce esta interessado em treinar!!!");
    $('#professor1').hide(300);
    $('#professor2').show(300);
    $('#professor3').hide(300);
}