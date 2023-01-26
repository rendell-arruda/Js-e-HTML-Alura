const robrotron = document.querySelector('#robotron');
robrotron.addEventListener('click', event => {
  console.log(event);
});

function dizOi(nome) {
  console.log('oi ' + nome);
  console.log('bem vindo ao roborton');
}
dizOi('Pedro');
