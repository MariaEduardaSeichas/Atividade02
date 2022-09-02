window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function colocarNome(){
    var equipe1 = document.getElementById('nome').value;
    var paragrafo = document.getElementById('nome_equipe');
 paragrafo.innerHTML = equipe1;

 
}

function colocarNome2(){
    var equipe2 = document.getElementById('nome2').value;
    var paragrafo = document.getElementById('nome_equipe2');
 paragrafo.innerHTML = equipe2;

}

function calcularPonto(){
    var ponto1 = parseInt(document.getElementById('placar1') +1, 10);
    var paragrafo = document.getElementById('placar');
    paragrafo.innerHTML = ponto1;
}

function calcularPonto2(){
    var ponto2 = parseInt(document.getElementById('placar2') +3, 10);
    var paragrafo = document.getElementById('placar');
    paragrafo.innerHTML = ponto2;
}

function calcularPonto3(){
    var ponto3 = parseInt(document.getElementById('placar3') +6, 10);
    var paragrafo = document.getElementById('placar');
    paragrafo.innerHTML = ponto3;
}

function calcularPonto4(){
    var ponto4 = parseInt(document.getElementById('placar4') +12, 10);
    var paragrafo = document.getElementById('placar');
    paragrafo.innerHTML = ponto4;
}

function calcularPonto5(){
    var ponto5 = parseInt(document.getElementById('placar5') +1, 10);
    var paragrafo = document.getElementById('placar2');
    paragrafo.innerHTML = ponto5;
}

function calcularPonto6(){
    var ponto6 = parseInt(document.getElementById('placar6') +3, 10);
    var paragrafo = document.getElementById('placar2');
    paragrafo.innerHTML = ponto6;
}

function calcularPonto7(){
    var ponto7 = parseInt(document.getElementById('placar7') +6, 10);
    var paragrafo = document.getElementById('placar2');
    paragrafo.innerHTML = ponto7;
}

function calcularPonto8(){
    var ponto8 = parseInt(document.getElementById('ponto8') +12, 10);
    var paragrafo = document.getElementById('placar2');
    paragrafo.innerHTML = ponto8;
}
