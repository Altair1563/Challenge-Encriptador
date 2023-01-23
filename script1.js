function encriptar(){
    var frase = document.getElementById("encriptado").value.toLowerCase();
    
    
    
    var encriptado = frase.replace(/e/img, "enter");
    var encriptado = encriptado.replace(/i/img, "imes");
    var encriptado = encriptado.replace(/a/img, "ai");
    var encriptado = encriptado.replace(/o/img, "ober");
    var encriptado = encriptado.replace(/u/img, "ufat");

    document.getElementById("desencriptado").innerHTML = encriptado;
    
    //mostrando Caja resultado
    var cajaResultado = document.getElementById("caja1");
    cajaResultado.style.opacity = "1";
    
    //Ocultando Mensaje1
    var mensajes = document.getElementById('nMensaje');
    mensajes.style.opacity ='0';

    //Ocultando Mensaje1
    var mensajes = document.getElementById('subMensaje');
    mensajes.style.opacity ='0';

    //Mostrado tecla copiar
    var teclaCopiar = document.getElementById("teclaCopiar");
    teclaCopiar.style.opacity = "1";


}

function desencriptar(){
    var frase2 = document.getElementById("encriptado").value.toLowerCase();
    
    var encriptado = frase2.replace(/enter/img, "e");
    var encriptado = encriptado.replace(/imes/img, "i");
    var encriptado = encriptado.replace(/ai/img, "a");
    var encriptado = encriptado.replace(/ober/img, "o");
    var encriptado = encriptado.replace(/ufat/img, "u");

    document.getElementById("desencriptado").innerHTML = encriptado;

}

function copiar(){
    var contenido = document.querySelector("#desencriptado");
    contenido.select("desencriptado");
    document.execCommand("copy");

}




