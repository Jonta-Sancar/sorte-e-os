var intervalo1;
var intervalo2;
const delay = 80;

function sortear(button) {

  const numero_maximo = document.querySelector('#input-number').value;

  button.parentElement.remove();


  intervalo1 = setInterval(() => {

    let resultado_anterior = 0;

    const resultado_parsial = sorteio(numero_maximo);

    exibirResposta(resultado_parsial, 0);

    resultado_anterior = resultado_parsial;

  }, delay);

  intervalo2 = setInterval(() => {
    clearInterval(intervalo1);

    const resultado = sorteio(numero_maximo);

    exibirResposta(resultado, 1);
  }, (delay * 62.5))
}

function sorteio(num_max) {

  const resposta = Math.ceil(Math.random() * num_max);

  return resposta;
}

function exibirResposta(valor, terminou) {

  const h1 = document.querySelector('#exibir-resposta');
  h1.style.display = 'block';        

  if (terminou == 1) {
    h1.style.opacity = '0';

    let opacity_value = 100;

    const intervalo = setInterval(() => {
      h1.style.opacity = (100 - opacity_value) + '%';

      const size = (100 - opacity_value) * 1.3;
      h1.style.fontSize = size + 'px';

      if(opacity_value == 0){
        h1.classList.add('vencedor');

        const body = document.querySelector('body');

        body.classList.add('bg-green');

        clearInterval(intervalo);
      }
      else{
        opacity_value--;
      }
    }, 30);
    h1.innerHTML = valor;

    clearInterval(intervalo2);
  }
  else {
    h1.innerHTML = valor + '...';
  }
}