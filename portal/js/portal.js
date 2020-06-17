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