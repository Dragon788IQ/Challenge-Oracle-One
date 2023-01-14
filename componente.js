
function deplegar_1() {
  var x = document.getElementById('encriptado');
  var y = document.getElementById('desencriptado');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.display = 'none';
  } else {
    x.style.display = 'none';
  }
}

function deplegar_2() {
  var x = document.getElementById('desencriptado');
  var y = document.getElementById('encriptado');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    y.style.display = 'none';
  } else {
    x.style.display = 'none';
  }
}