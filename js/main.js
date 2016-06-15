var nombres = [ 
	{ 	nombre:"Aldo",
  	telefono: "45454545"},
	{ nombre: "AnaMaria", 
	telefono: "23232323"},

	{ nombre: "Andrea",
	telefono: "45464674"},

	{ nombre: "MariaPaula",
	telefono: "46789065"},
	{nombre: "MarianaCosta",
 	telefono: "353231134"},
	{ nombre: "Rudolfo",
	telefono: "45678902"},

	{ nombre: "Raymi",
	telefono: "Katy"}, 
	
	{ nombre: "LaboratoriaPeru",
	telefono: "354352435"}
];

var objeto = [
	{	nombre: 'Irving',
		telefono: '45678902',
		algo: 'no' 
	}
];

/*--------------------------------------------- AGREGA LOS MENSAJES A LA BANDEJA DE ENTRADA -----------------------------------------------*/


$(document).ready(function function_name(argument) {
	console.log("el documento esta listo :D");

	var bandejaEntrada = document.getElementById("bandejaEntrada"),
		messageInput = document.getElementById("messageInput"),
		btnNuevoMensaje = document.getElementById("btn-agregar");

	// Funciones
	var agregarMessage = function()  {
		var message = messageInput.value,
			newMessage = document.createElement("p"),
			text = document.createElement("p"),
			contenido = document.createTextNode(message);

		// Agregamos el contenido al text
		text.appendChild(contenido);
		// Agrergamos el text al nuevo mensaje (p)
		newMessage.appendChild(text);
		// text.insertAdjacentHTML('afterend','<i class="fa fa-trash" aria-hidden="true"></i>');
		// Agregamos el nuevo mensaje a la bandeja de entrada
		bandejaEntrada.appendChild(newMessage);

		messageInput.value = "";

	};

	// Agregar mensaje
	btnNuevoMensaje.addEventListener("click", agregarMessage);


});


/*-------------------------------------------------------  MENSAJES ---------------------------------------------------------*/


/*------------------------------------------------------BUSCA LOS CONTACTOS--------------------------------------------------*/

	function autocompletado () {
		document.getElementById("result").innerHTML = '';

			var contactos = [
				"LaboratoriaPeru",
				"Aldo",
				"AnaMaria",
				"Andrea",
				"Katy",
				"MarianaCosta",
				"MariaPaula",
				"Raymi",
				"Rudolfo"
			];

		 	var pal = document.getElementById("buscar-cont").value;
		 	var tam = pal.length;
		 	for(indice in contactos){
				var nombre = contactos[indice];
				var str = nombre.substring(0,tam);
				if(pal.length <= nombre.length && pal.length != 0 && nombre.length != 0){
					if(pal.toLowerCase() == str.toLowerCase()){
						var node = document.createElement("LI");
						var textnode = document.createTextNode(contactos[indice]);
						node.appendChild(textnode);
						document.getElementById("result").appendChild(node);
					} else {
            			//alert('no')
          			}
				}
			}
	}

/*--------------------------------------------------------------------------------------------------------------------------------*/

for (var i = 0; i < objeto.length; i++) {
	objeto = objeto[i];
	console.log(objeto.nombre);
	console.log(objeto.telefono);
	console.log(objeto.algo);
}
