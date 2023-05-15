//CARRUSEL
// Obtenemos los elementos del carrusel
var carrusel = document.querySelector('#carrusel')
var imagenes = carrusel.querySelectorAll('#imagen')

var indiceImagenActual = 0 // Inicializamos el índice de la imagen actual en 0

// Función para mostrar la imagen actual
function mostrarImagenActual(indice) {
  // Quitamos la clase "visible" de la imagen actual
  if (indice !== indiceImagenActual) {
    imagenes[indiceImagenActual].classList.remove('visible')
    imagenes[indiceImagenActual].classList.add('invisible')
  }

  // Agregamos la clase "visible" a la nueva imagen
  imagenes[indice].classList.remove('invisible')
  imagenes[indice].classList.add('visible')
  // Actualizamos el índice de la imagen actual
  indiceImagenActual = indice
}

// Evento click del botón "Anterior"
function mostrarAnterior() {
  // Obtenemos el índice de la imagen anterior (o la última si estamos en la primera)
  indice =
    indiceImagenActual === 0 ? imagenes.length - 1 : indiceImagenActual - 1
  // Mostramos la imagen anterior
  mostrarImagenActual(indice)
}

// Evento click del botón "Siguiente"
function mostrarSiguiente() {
  // Obtenemos el índice de la imagen siguiente (o la primera si estamos en la última)
  indice =
    indiceImagenActual === imagenes.length - 1 ? 0 : indiceImagenActual + 1
  // Mostramos la imagen siguiente
  mostrarImagenActual(indice)
}

// Mostramos la primera imagen al cargar la página
mostrarImagenActual(indiceImagenActual)


//RELOJ
//INTRODUCIDO EN EL FINAL DE LA PÁGINA
function actualizarReloj() {
  var fecha = new Date();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  var ampm = horas >= 12 ? 'PM' : 'AM';
  horas = horas % 12;
  horas = horas ? horas : 12;
  minutos = minutos < 10 ? '0' + minutos : minutos;
  segundos = segundos < 10 ? '0' + segundos : segundos;
  var horaActual = horas + ':' + minutos + ':' + segundos + ' ' + ampm;
  document.getElementById('reloj').innerHTML = horaActual;
}

setInterval("actualizarReloj()", 1000);

//FORMULARIO

function clear(){
  document.getElementById("borrador").innerHTML="";
}

function crearForm() {
  // Crea el formulario
  var form = document.createElement("form");
  form.setAttribute("method", "post");
  form.setAttribute("action", ""); // Ruta de acción del formulario

  // Crea el campo de texto para el nombre
  var labelNombre = document.createElement("label");
  labelNombre.innerHTML = "Nombre:";
  var inputNombre = document.createElement("input");
  inputNombre.setAttribute("type", "text");
  inputNombre.setAttribute("name", "nombre");
  inputNombre.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
  form.appendChild(labelNombre);
  form.appendChild(inputNombre);
  

  // Crea el campo de apellidos
  var labelApellidos = document.createElement("label");
  labelApellidos.innerHTML = "Apellidos:";
  var inputApellidos = document.createElement("input");
  inputApellidos.setAttribute("type", "text");
  inputApellidos.setAttribute("name", "apellidos");
  inputApellidos.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
  form.appendChild(labelApellidos);
  form.appendChild(inputApellidos);
  labelApellidos


  // Crea el campo de correo electrónico
  var labelEmail = document.createElement("label");
  labelEmail.innerHTML = "e-mail:";
  var inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("name", "email");
  inputEmail.setAttribute('style', "width:100%;margin: 10px 0px;padding: 5px");//Asignar el atributo style
  form.appendChild(labelEmail);
  form.appendChild(inputEmail);
  labelEmail
  inputEmail

  // Crea el campo de mensaje
  var labelMensaje = document.createElement("label");
  labelMensaje.innerHTML = "Mensaje:";
  var textareaMensaje = document.createElement("textarea");
  textareaMensaje.setAttribute("name", "mensaje");
  textareaMensaje.setAttribute('style', "width:100%;height:200px;margin: 10px 0px;padding: 5px");//Asignar el atributo style
  form.appendChild(labelMensaje);
  form.appendChild(textareaMensaje);
  labelMensaje
  textareaMensaje

  // Crea el botón de envío
  var botonEnviar = document.createElement("button");
  botonEnviar.setAttribute("type", "submit");
  botonEnviar.innerHTML = "Enviar";
  form.appendChild(botonEnviar);

  // Alerta enviada al enviar algo vía formulario
  botonEnviar.setAttribute("onclick","alert('El mensaje ha sido enviado con éxito')");

  // Inserta el formulario en el elemento con el id "formulario"
  clear();
  document.getElementById("borrador").appendChild(form);
}





