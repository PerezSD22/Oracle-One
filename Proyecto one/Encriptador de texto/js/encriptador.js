function encriptar(texto) {
    // Dividir el texto en un array de caracteres
    const caracteres = texto.split(''); //HOLA = (H,O,L,A)
  
    // Iterar sobre el array de caracteres
    caracteres.forEach((caracter, index) => {
      // Verificar si el caracter es una de las letras especificadas
      if (caracter === 'e') {
        caracteres[index] = 'enter';
      } else if (caracter === 'i') {
        caracteres[index] = 'imes';
      } else if (caracter === 'a') {
        caracteres[index] = 'ai';
      } else if (caracter === 'o') {
        caracteres[index] = 'ober';
      } else if (caracter === 'u') {
        caracteres[index] = 'ufat';
      }
    });
  
    // Unir el array de caracteres en una cadena de texto
    return caracteres.join(''); // hola = Hoberlai
}
  
 

function mostrarTexto(){
    let texto = document.getElementById("textoEntrada").value;
    let textEcriptado = encriptar(texto)
    document.getElementById("mensaje__Cripto").innerHTML = textEcriptado;
}


function decrypt(encryptedMessage) {
    // Dividir el mensaje encriptado en dos grupos: "llaves" de encriptación y caracteres que no son "llaves" de encriptación
    const llaves = encryptedMessage.split(/(enter|imes|ai|ober|ufat)/); // Hoberlai = (H,OBER,L,AI)
  
    // Inicializar una cadena de texto resultante
    let resultado = '';
  
    // Iterar sobre el array de "llaves"
    llaves.forEach((llave) => {
      // Verificar si la "llave" es una de las especificadas
      if (llave === 'enter') {
        resultado += 'e';
      } else if (llave === 'imes') {
        resultado += 'i';
      } else if (llave === 'ai') {
        resultado += 'a';
      } else if (llave === 'ober') {
        resultado += 'o';
      } else if (llave === 'ufat') {
        resultado += 'u';
      } else {
        // Si la "llave" no es una de las especificadas, agregarla a la cadena de texto resultante sin modificar
        resultado += llave;
      }
    });
  
    // Devolver la cadena de texto resultante
    return resultado;
}


function mostrarTexto__2(){

    let texto = document.getElementById("textoEntrada").value;
    let textEcriptado = decrypt(texto);
    document.getElementById("mensaje__Cripto").innerHTML = textEcriptado;
}


function validateTextarea() {
    // Convertir el texto a minúsculas
    let textarea = document.getElementById("textoEntrada");
    textarea.value = textarea.value.toLowerCase();
  
    // Eliminar cualquier carácter que no sea una letra del alfabeto o un número
    textarea.value = textarea.value.replace(/[^a-z ? , . !]/g, "");
  }

// Define una función que copie el texto encriptado o desencriptado al portapapeles
function copiarTexto() {
    
     // Obtiene el elemento <div> con el ID especificado
    const div = document.getElementById("mensaje__Cripto");
      
    // Obtiene el texto del elemento <div>
    const texto = div.textContent;
      
    // Copia el texto al portapapeles usando la Clipboard API
    navigator.clipboard.writeText(texto);
      
    // Obtén una referencia al elemento textarea
    var textarea = document.getElementById('textoEntrada');

    // Asigna una cadena vacía a la propiedad value del elemento textarea
    textarea.value = '';
  }

  function borrar(){
    // Obtén una referencia al elemento textarea
    let textarea = document.getElementById('textoEntrada');

    // Asigna una cadena vacía a la propiedad value del elemento textarea
    textarea.value = ''; 

    let mensajeCripto = document.getElementById('mensaje__Cripto');
    let texto = mensajeCripto.textContent;

    texto.textContent ='';


  }
  