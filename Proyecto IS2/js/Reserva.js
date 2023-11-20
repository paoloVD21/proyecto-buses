// Obtén el modal de confirmación
var modalConfirmacion = document.getElementById("modalConfirmacion");

// Función para mostrar el modal de confirmación
function confirmarReserva() {
  modalConfirmacion.style.display = "block";
}

// Función para cerrar el modal
function cerrarModal() {
  modalConfirmacion.style.display = "none";
}

// Función para realizar la reserva (puedes personalizar esto según tus necesidades)
function reservar() {
  alert("Te confirmamos que hemos recibido tu reserva con éxito. Pronto recibirás un correo electrónico con todos los detalles. ¡Gracias por elegirnos!");
  cerrarModal();
}