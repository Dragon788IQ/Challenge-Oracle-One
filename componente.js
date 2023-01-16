
function deplegar_1() {
  let contenedor_1 = document.getElementById('encriptado');
  let contenedor_2 = document.getElementById('desencriptado');
  var texto_1 = document.getElementById("texto_1")
  var texto_2 = document.getElementById("texto_2")

  if (contenedor_1.style.display === 'none') {
    contenedor_1.style.display = 'block';
    contenedor_2.style.display = 'none';
  } else {
    contenedor_1.style.display = 'none';
  }
  codificador(texto_1)
}

function deplegar_2() {
  let contenedor_2 = document.getElementById('desencriptado');
  let contenedor_1 = document.getElementById('encriptado');
  var texto_1 = document.getElementById("texto_1")
  var texto_2 = document.getElementById("texto_2")

  if (contenedor_2.style.display === 'none') {
    contenedor_2.style.display = 'block';
    contenedor_1.style.display = 'none';
    codificador(texto_2)
  } else {
    contenedor_2.style.display = 'none';
  }
  decodificar()
}

function codificador(texto){
  let mensaje_raw = document.getElementById('mensaje').value.toString();
  let mensaje_process = [];
  let contador =0;

  mensaje_process = mensaje_raw.split("")

  while(contador < mensaje_process.length){
    if(mensaje_process[contador] == 'a'){
      mensaje_process[contador] = 'ai';
    }
    if(mensaje_process[contador] == 'e'){
      mensaje_process[contador] = 'enter';
    }
    if(mensaje_process[contador] == 'i'){
      mensaje_process[contador] = 'imes';
    }
    if(mensaje_process[contador] == 'o'){
      mensaje_process[contador] = 'ober';
    }
    if(mensaje_process[contador] == 'u'){
      mensaje_process[contador] = 'ufat';
    }
    contador += 1;
  }
  texto_1.textContent = mensaje_process.join("");
}

function decodificar(){
  let mensaje_raw = document.getElementById('mensaje').value.toString();
  let mensaje_process = mensaje_raw.split(" ");
  let contador = 0;

  while(contador < mensaje_process.length){
    mensaje_process[contador] = remplazador(mensaje_process[contador])
    contador += 1;
  }
  texto_2.textContent = mensaje_process.join(" ");
}

function remplazador(palabra){

  palabra = palabra.replace(/ai/gi, 'a')
  palabra = palabra.replace(/enter/gi, 'e')
  palabra = palabra.replace(/imes/gi, 'i')
  palabra = palabra.replace(/ober/gi, 'o')
  palabra = palabra.replace(/ufat/gi, 'u') 

  return palabra
}

function copiar_1(){
  let copyText = document.getElementById('texto_1').textContent;
  navigator.clipboard.writeText(copyText);
  alert("Se ha copiado el texto: " + copyText)
}

function copiar_2(){
  let copyText = document.getElementById('texto_2').textContent;
  navigator.clipboard.writeText(copyText);
  alert("Se ha copiado el texto: " + copyText)
}