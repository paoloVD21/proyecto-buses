function validarFormulario() {
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var genero = document.getElementById("genero").value;
    var nombre = document.getElementById("nombre").value;
    var apellidoPaterno = document.getElementById("apellidoPaterno").value;
    var apellidoMaterno = document.getElementById("apellidoMaterno").value;
    var fechaNacimiento = document.getElementById("datepicker").value;
    var email = document.getElementById("email").value;

    if (
        tipoDocumento === "" ||
        numeroDocumento === "" ||
        genero === "" ||
        nombre === "" ||
        apellidoPaterno === "" ||
        apellidoMaterno === "" ||
        fechaNacimiento === "" ||
        email === ""
    ) {
        alert("Por favor, complete todos los campos obligatorios marcados con *.");
    } else {
        // Redirigir a la página index.html
        window.location.href = "RealizarReserva.html";
    }
}

function validarLongitudDocumento() {
    var inputDocumento = document.getElementById("numeroDocumento");
    var mensajeErrorDocumento = document.getElementById("mensajeErrorDocumento");
    var botonEnviar = document.getElementById("botonEnviar");  // Reemplaza "botonEnviar" con el ID correcto de tu botón de envío

    var numeroDocumento = inputDocumento.value;

    if (numeroDocumento.length === 0 || !/^\d+$/.test(numeroDocumento)) {
        mensajeErrorDocumento.textContent = "El número de documento debe tener 8 dígitos numéricos.";
        botonEnviar.disabled = true;  // Deshabilitar el botón de envío
    } else if (numeroDocumento.length !== 8) {
        mensajeErrorDocumento.textContent = "El número de documento debe tener 8 dígitos.";
        botonEnviar.disabled = true;  // Deshabilitar el botón de envío
    } else {
        mensajeErrorDocumento.textContent = "";
        botonEnviar.disabled = false;  // Habilitar el botón de envío
    }
}


function validarNumeroCelular() {
    var inputCelular = document.getElementById("nroCelular");
    var mensajeErrorCelular = document.getElementById("mensajeErrorCelular");
    var botonEnviar = document.getElementById("botonEnviar");  // Reemplaza "botonEnviar" con el ID correcto de tu botón de envío

    var numeroCelular = inputCelular.value;

    if (!/^[9]\d{8}$/.test(numeroCelular)) {
        mensajeErrorCelular.textContent = "El número de celular debe empezar con 9 y tener 9 dígitos numéricos.";
        botonEnviar.disabled = true;  // Deshabilitar el botón de envío
    } else {
        mensajeErrorCelular.textContent = "";
        botonEnviar.disabled = false;  // Habilitar el botón de envío
    }
}


function validarCorreo() {
    var inputCorreo = document.getElementById("email");
    var mensajeErrorCorreo = document.getElementById("mensajeErrorCorreo");
    var correo = inputCorreo.value;

    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(correo);

    if (correo.length === 0) {
        mensajeErrorCorreo.textContent = "";  // Mostrar cadena vacía si la longitud es 0
    } else if (esValido == true) {
        mensajeErrorCorreo.textContent = "";
    } else {
        mensajeErrorCorreo.textContent = "El formato es inválido";
    }
}

