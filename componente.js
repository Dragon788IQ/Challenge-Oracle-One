
function deplegar_1() {
  let contenedor_1 = document.getElementById('encriptado');
  let contenedor_2 = document.getElementById('desencriptado');
  let texto_1 = document.getElementById("texto_1")
  let texto_2 = document.getElementById("texto_2")

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
  let texto_1 = document.getElementById("texto_1")
  let texto_2 = document.getElementById("texto_2")

  if (contenedor_2.style.display === 'none') {
    contenedor_2.style.display = 'block';
    contenedor_1.style.display = 'none';
    codificador(texto_2)
  } else {
    contenedor_2.style.display = 'none';
  }
}

function codificador(texto){
  let mensaje_raw = document.getElementById('mensaje').value.toString();
  let mensaje_process = [];
  var contador =0;
  console.log(typeof mensaje_raw);
  mensaje_raw=mensaje_raw.replace("o", "ine")
  texto_1.textContent = mensaje_raw;
}