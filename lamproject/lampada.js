const turnon = document.getElementById('turnon');
const turnoff = document.getElementById('turnoff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1; //qdo ele acha traz um numero maior que -1, qdo não encontra o valor buscado é = -1. Essa condição pode ser verdadeira ou falsa(não tem a palavra buscada).

}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg '
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'

}
turnon.addEventListener('click', lampOn);
turnoff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);