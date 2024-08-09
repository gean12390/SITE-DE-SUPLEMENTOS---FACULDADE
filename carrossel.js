
// CARROSSEL PADRÃO (APÓS REINICIAR A PAGINA, APARECERÁ ISSO DE CAPA)
document.getElementById("foto").style.backgroundImage = "url(././imagens/carrossel/foto01.png)";
document.getElementById("foto").href = 'https://www.youtube.com';
document.querySelector('.barra01').style.backgroundColor = "red";


// BARRAS 
document.querySelector('.barra01').addEventListener('click', function () {

    foto01();


});
document.querySelector('.barra02').addEventListener('click', function () {

    foto02();

});


function foto01() {
    document.getElementById("foto").style.backgroundImage = "url('./imagens/carrossel/foto01.png')";
    document.querySelector('.barra01').style.backgroundColor = "red";
    document.querySelector('.barra02').style.backgroundColor = "#bbbbbb";
    document.getElementById("foto").href = 'https://www.youtube.com';


}
function foto02() {
    document.getElementById("foto").style.backgroundImage = "url('./imagens/carrossel/foto02.png')";
    document.querySelector('.barra02').style.backgroundColor = "red";
    document.querySelector('.barra01').style.backgroundColor = "#bbbbbb";
    document.getElementById("foto").href = 'https://www.google.com';

}

function redirecionarPara(url) {
    window.location.href = url;
}
