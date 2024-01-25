function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function realizarOperacion(operacion) {
    var textoElement = document.getElementById('texto');
    var texto = textoElement.value;
    var resultado = '';
    if (texto.trim() === '') {
        SinMensaje();
        return
    }

    if (operacion === 'encriptar') {
        asignarTextoElemento('.derecha h1', 'Encriptado');
        document.getElementById("copiar").style.display = "";
        resultado = encriptarTexto(texto);
    } else if (operacion === 'desencriptar') {
        asignarTextoElemento('.derecha h1', 'Desencriptado');
        resultado = desencriptarTexto(texto);
    }
    document.getElementById("imagen_busqueda").style.display = "none";
    textoElement.value = resultado;
    asignarTextoElemento('.derecha p', resultado);
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, '\n')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptarTexto(texto) {
    return texto
        .replace(/\n/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copiarResultado() {
    var textoElement = document.getElementById('texto');
    textoElement.select();
    document.execCommand('copy');
    asignarTextoElemento('.derecha h1', 'Texto copiado');
}

function SinMensaje() {
    asignarTextoElemento('.derecha h1', 'Ningún mensaje fue encontrado');
    asignarTextoElemento('.derecha p', 'Ingresa el texto que deseas encriptar o desencriptar');
    document.getElementById("copiar").style.display = "none";
    document.getElementById("imagen_busqueda").style.display = "";
}

SinMensaje();
document.getElementById("texto").addEventListener("input", function () {
    var texto = this.value;
    var textoLimpio = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9 \n]/g, '');
    textoLimpio = textoLimpio.toLowerCase();
    this.value = textoLimpio;

    if (this.value.trim() === '') {
        SinMensaje();
        return
    }
});
